/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Bain Liao
// Created on: Apr 2025
// This is the Splash Scene

class SplashScene extends Phaser.Scene {
  constructor() {
    super({ key: "splashScene" })
  }

  /**
   * @param {object} data 
   */
  inti(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  preload() {
    console.log("Splash Scene")
  }

  /**
   * @param {object} data 
   */
  create(data) {
    // pass
  }

  /**
   * @param {number} time
   * @param {number} delta 
   */
  update(time, delta) {
    // pass
  }
}

export default SplashScene
