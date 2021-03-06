window.ColorEditorArea = function () {
    var colorEditorArea = sonicManager.uiManager.colorEditorArea = new UiArea(650, 30, 960, 800, sonicManager.uiManager, true);
    colorEditorArea.visible = false;
    sonicManager.uiManager.UIAreas.push(colorEditorArea);


    colorEditorArea.addControl(colorEditorArea.colorEditor = new ColorEditingArea(30, 45, { width: 680, height: 680 }, false));
    colorEditorArea.addControl(new Button(770, 70, 150, 22, "Show Outline", sonicManager.uiManager.buttonFont, "rgb(50,150,50)", function () {
        colorEditorArea.colorEditor.editor.showOutline = !colorEditorArea.colorEditor.editor.showOutline;
    }
    ));

    colorEditorArea.addControl(new Button(770, 190, 150, 22, "Modify Hurt Map", sonicManager.uiManager.buttonFont, "rgb(50,150,50)", function () {
        if (colorEditorArea.colorEditor.showHurtMap == false && colorEditorArea.colorEditor.showCollideMap == false) {
            colorEditorArea.colorEditor.showHurtMap = true;
            colorEditorArea.colorEditor.showCollideMap = false;
            this.text = "Modify Collide Map";
        } else if (colorEditorArea.colorEditor.showCollideMap == false) {
            colorEditorArea.colorEditor.showHurtMap = false;
            colorEditorArea.colorEditor.showCollideMap = true;
            this.text = "Modify Pixel Map";
        } else {
            colorEditorArea.colorEditor.showHurtMap = false;
            colorEditorArea.colorEditor.showCollideMap = false;
            this.text = "Modify Hurt Map";
        }
    }));

    colorEditorArea.addControl(new TextArea(750, 150, function () { return "Line Width:" + colorEditorArea.colorEditor.editor.lineWidth; }, sonicManager.uiManager.textFont, "Black"));

    colorEditorArea.addControl(new Button(900, 120, 14, 20, "^", sonicManager.uiManager.buttonFont, "rgb(50,150,50)", function () {
        colorEditorArea.colorEditor.editor.lineWidth = Math.max(colorEditorArea.colorEditor.editor.lineWidth + 1, 1);
    }
    ));
    colorEditorArea.addControl(new Button(900, 145, 14, 20, "v", sonicManager.uiManager.buttonFont, "rgb(50,150,50)", function () {
        colorEditorArea.colorEditor.editor.lineWidth = Math.min(colorEditorArea.colorEditor.editor.lineWidth - 1, 10);
    }
    ));
    colorEditorArea.addControl(colorEditorArea.paletteArea = new PaletteArea(770, 250, { scale: { x: 45, y: 45 }, showCurrent: true }));
    colorEditorArea.colorEditor.paletteEditor = colorEditorArea.paletteArea;
    colorEditorArea.init = function (frame) {
        colorEditorArea.colorEditor.scale = { x: 700 / frame.width, y: 700 / frame.height };
        colorEditorArea.colorEditor.init(frame);
        colorEditorArea.paletteArea.init(frame.palette, false);
    };

};