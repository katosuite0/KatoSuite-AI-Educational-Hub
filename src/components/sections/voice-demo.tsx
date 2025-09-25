"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mic, MicOff, Volume2, Play, Pause } from "lucide-react"

export function VoiceDemo() {
  const [isListening, setIsListening] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [transcript, setTranscript] = useState("")
  const [demoStep, setDemoStep] = useState(0)

  const demoScripts = [
    {
      command: "Create a lesson plan for 3-year-olds about colors",
      response: "I'll create a color exploration lesson following HDLH guidelines. This 30-minute activity will include sensory play with colored water, color sorting games, and a rainbow art project. The lesson meets developmental domains for cognitive and creative expression."
    },
    {
      command: "Adapt this for French immersion students",
      response: "Parfait! I'm adapting the lesson for French immersion. We'll use 'les couleurs' vocabulary, sing 'Arc-en-ciel' songs, and include French color words in all activities. This meets bilingual learning objectives while maintaining HDLH compliance."
    },
    {
      command: "Generate assessment rubric for this lesson",
      response: "Here's your HDLH-aligned assessment: I'll track color recognition (emerging/developing/secure), French vocabulary use, fine motor skills during art activities, and social interaction during group play. The rubric includes photo documentation prompts and observation notes."
    }
  ]

  const handleVoiceToggle = () => {
    if (!isListening) {
      setIsListening(true)
      // Simulate voice recognition
      setTimeout(() => {
        setTranscript(demoScripts[demoStep].command)
        setIsListening(false)
        // Auto-generate response after a brief pause
        setTimeout(() => {
          setDemoStep((prev) => (prev + 1) % demoScripts.length)
        }, 1500)
      }, 3000)
    } else {
      setIsListening(false)
      setTranscript("")
    }
  }

  const playDemo = () => {
    setIsPlaying(true)
    // Simulate playing the demo
    setTimeout(() => {
      setIsPlaying(false)
    }, 2000)
  }

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience Voice AI in Action
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              See how Canadian ECE professionals use voice commands to create HDLH/Flight compliant lesson plans in seconds
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Interactive Demo */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mic className="h-5 w-5 text-primary" />
                  Try Voice Commands
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Voice Input Area */}
                <div className="p-4 border-2 border-dashed border-muted rounded-lg min-h-[100px] flex flex-col justify-center">
                  {isListening ? (
                    <div className="text-center">
                      <div className="animate-pulse">
                        <Mic className="h-8 w-8 text-primary mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Listening...</p>
                      </div>
                    </div>
                  ) : transcript ? (
                    <div>
                      <p className="text-sm font-medium text-primary mb-2">You said:</p>
                      <p className="text-sm italic">"{transcript}"</p>
                    </div>
                  ) : (
                    <div className="text-center text-muted-foreground">
                      <MicOff className="h-8 w-8 mx-auto mb-2" />
                      <p className="text-sm">Click "Start Voice Demo" to begin</p>
                    </div>
                  )}
                </div>

                {/* Voice Controls */}
                <div className="flex gap-3">
                  <Button
                    onClick={handleVoiceToggle}
                    className="flex-1"
                    variant={isListening ? "destructive" : "default"}
                  >
                    {isListening ? (
                      <>
                        <MicOff className="h-4 w-4 mr-2" />
                        Stop Listening
                      </>
                    ) : (
                      <>
                        <Mic className="h-4 w-4 mr-2" />
                        Start Voice Demo
                      </>
                    )}
                  </Button>
                  <Button
                    onClick={playDemo}
                    variant="outline"
                    disabled={isPlaying}
                  >
                    {isPlaying ? (
                      <Pause className="h-4 w-4" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                {/* Sample Commands */}
                <div className="space-y-2">
                  <p className="text-sm font-medium">Try saying:</p>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <p>"Create a lesson plan for 4-year-olds about shapes"</p>
                    <p>"Adapt this for French immersion students"</p>
                    <p>"Generate assessment rubric for this lesson"</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Response */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Volume2 className="h-5 w-5 text-green-600" />
                  AI Response
                </CardTitle>
              </CardHeader>
              <CardContent>
                {transcript ? (
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <p className="text-sm font-medium text-green-800 mb-2">
                        KatoSuite AI responds:
                      </p>
                      <p className="text-sm text-green-700">
                        {demoScripts[(demoStep - 1 + demoScripts.length) % demoScripts.length].response}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      HDLH/Flight compliance verified
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-muted-foreground py-8">
                    <p className="text-sm">AI response will appear here after you speak</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Features Highlight */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mic className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Voice Commands</h3>
              <p className="text-sm text-muted-foreground">
                Create lesson plans hands-free while supervising children
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-semibold">🇨🇦</span>
              </div>
              <h3 className="font-semibold mb-2">HDLH/Flight Compliant</h3>
              <p className="text-sm text-muted-foreground">
                Automatically aligned with Canadian ECE frameworks
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-semibold">🗣️</span>
              </div>
              <h3 className="font-semibold mb-2">Bilingual Support</h3>
              <p className="text-sm text-muted-foreground">
                Works in both English and French for immersion programs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}