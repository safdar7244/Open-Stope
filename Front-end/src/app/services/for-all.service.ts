import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ForAllService {

  public stopeHeightSource = new BehaviorSubject<number>(0);
  currentStopeHeight = this.stopeHeightSource.asObservable();

  public stopeHeight2Source = new BehaviorSubject<number>(0);
  currentStopeHeight2 = this.stopeHeight2Source.asObservable();

  public sideWidthSource = new BehaviorSubject<number>(0);
  currentSideWidth = this.sideWidthSource.asObservable();

  public sideTopWidthSource = new BehaviorSubject<number>(0);
  currentSideTopWidth = this.sideTopWidthSource.asObservable();

  public sideBottomWidthSource = new BehaviorSubject<number>(0);
  currentSideBottomWidth = this.sideBottomWidthSource.asObservable();

  public sideLengthSource = new BehaviorSubject<number>(0);
  currentSideLength = this.sideLengthSource.asObservable();

  public fhWidthSource = new BehaviorSubject<number>(0);
  currentFhWidth = this.fhWidthSource.asObservable();

  public fhWidth2Source = new BehaviorSubject<number>(0);
  currentFhWidth2 = this.fhWidth2Source.asObservable();

  public volumeSource = new BehaviorSubject<number>(0);
  currentVolume = this.volumeSource.asObservable();

  public hrCrownSource = new BehaviorSubject<number>(0);
  currentHrCrown = this.hrCrownSource.asObservable();

  public hrFootSource = new BehaviorSubject<number>(0);
  currentHrFoot = this.hrFootSource.asObservable();

  public hrHangSource = new BehaviorSubject<number>(0);
  currentHrHang = this.hrHangSource.asObservable();

  public hrSideSource = new BehaviorSubject<number>(0);
  currentHrSide = this.hrSideSource.asObservable();

  public crownPSource = new BehaviorSubject<number>(0);
  currentCrownP = this.crownPSource.asObservable();

  public crownASource = new BehaviorSubject<number>(0);
  currentCrownA = this.crownASource.asObservable();

  public footPSource = new BehaviorSubject<number>(0);
  currentFootP = this.footPSource.asObservable();

  public footASource = new BehaviorSubject<number>(0);
  currentFootA = this.footASource.asObservable();

  public hangPSource = new BehaviorSubject<number>(0);
  currentHangP = this.hangPSource.asObservable();

  public hangASource = new BehaviorSubject<number>(0);
  currentHangA = this.hangASource.asObservable();

  public sidePSource = new BehaviorSubject<number>(0);
  currentSideP = this.sidePSource.asObservable();

  public sideASource = new BehaviorSubject<number>(0);
  currentSideA = this.sideASource.asObservable();

  public rqd_crownSource = new BehaviorSubject<number>(0);
  currentRqd_crown = this.rqd_crownSource.asObservable();

  public rqd_hwSource = new BehaviorSubject<number>(0);
  currentRqd_hw = this.rqd_hwSource.asObservable();
  
  public rqd_fwSource = new BehaviorSubject<number>(0);
  currentRqd_fw = this.rqd_fwSource.asObservable();

  public rqd_sw1Source = new BehaviorSubject<number>(0);
  currentRqd_sw1 = this.rqd_sw1Source.asObservable();

  public rqd_sw2Source = new BehaviorSubject<number>(0);
  currentRqd_sw2 = this.rqd_sw2Source.asObservable();

  public qRes_crownSource = new BehaviorSubject<number>(0);
  currentQRes_crown = this.qRes_crownSource.asObservable();

  public qRes_fwSource = new BehaviorSubject<number>(0);
  currentQRes_fw = this.qRes_fwSource.asObservable();

  public qRes_hwSource = new BehaviorSubject<number>(0);
  currentQRes_hw = this.qRes_hwSource.asObservable();

  public qRes_sw1Source = new BehaviorSubject<number>(0);
  currentQRes_sw1 = this.qRes_sw1Source.asObservable();

  public qRes_sw2Source = new BehaviorSubject<number>(0);
  currentQRes_sw2 = this.qRes_sw2Source.asObservable();

  public qQuality_crownSource = new BehaviorSubject<string>('');
  currentQQuality_crown = this.qQuality_crownSource.asObservable();

  public qQuality_hwSource = new BehaviorSubject<string>('');
  currentQQuality_hw = this.qQuality_hwSource.asObservable();

  public qQuality_fwSource = new BehaviorSubject<string>('');
  currentQQuality_fw = this.qQuality_fwSource.asObservable();

  public qQuality_sw1Source = new BehaviorSubject<string>('');
  currentQQuality_sw1 = this.qQuality_sw1Source.asObservable();

  public qQuality_sw2Source = new BehaviorSubject<string>('');
  currentQQuality_sw2 = this.qQuality_sw2Source.asObservable();

  public rqdQuality_crownSource = new BehaviorSubject<string>('');
  currentRqdQuality_crown = this.rqdQuality_crownSource.asObservable();

  public rqdQuality_hwSource = new BehaviorSubject<string>('');
  currentRqdQuality_hw = this.rqdQuality_hwSource.asObservable();

  public rqdQuality_fwSource = new BehaviorSubject<string>('');
  currentRqdQuality_fw = this.rqdQuality_fwSource.asObservable();

  public rqdQuality_sw1Source = new BehaviorSubject<string>('');
  currentRqdQuality_sw1 = this.rqdQuality_sw1Source.asObservable();

  public rqdQuality_sw2Source = new BehaviorSubject<string>('');
  currentRqdQuality_sw2 = this.rqdQuality_sw2Source.asObservable();

  public depthSource = new BehaviorSubject<number>(0);
  currentDepth = this.depthSource.asObservable();

  public VerticalstressSource = new BehaviorSubject<number>(0);
  currentVerticalstress = this.VerticalstressSource.asObservable();

  public HorizontalstressSource = new BehaviorSubject<number>(0);
  currentHorizontalstress = this.HorizontalstressSource.asObservable();

  public crownIndStressSource = new BehaviorSubject<number>(0);
  currentCrownIndStress = this.crownIndStressSource.asObservable();

  public sideIndStressSource = new BehaviorSubject<number>(0);
  currentSideIndStress = this.sideIndStressSource.asObservable();

  public hwIndStressSource = new BehaviorSubject<number>(0);
  currentHwIndStress = this.hwIndStressSource.asObservable();

  public fwIndStressSource = new BehaviorSubject<number>(0);
  currentFwIndStress = this.fwIndStressSource.asObservable();

  public crown_Afactor_originalSource = new BehaviorSubject<number>(0);
  currentCrown_Afactor_original = this.crown_Afactor_originalSource.asObservable();
  
  public crown_Afactor_modifiedSource = new BehaviorSubject<number>(0);
  currentCrown_Afactor_modified = this.crown_Afactor_modifiedSource.asObservable();

  public crown_Bfactor_originalSource = new BehaviorSubject<number>(0);
  currentCrown_Bfactor_original = this.crown_Bfactor_originalSource.asObservable();

  public crown_Bfactor_modifiedSource = new BehaviorSubject<number>(0);
  currentCrown_Bfactor_modified = this.crown_Bfactor_modifiedSource.asObservable();

  public crown_Cfactor_originalSource = new BehaviorSubject<number>(0);
  currentCrown_Cfactor_original = this.crown_Cfactor_originalSource.asObservable();

  public crown_Cfactor_modifiedSource = new BehaviorSubject<number>(0);
  currentCrown_Cfactor_modified = this.crown_Cfactor_modifiedSource.asObservable();

  public fw_Cfactor_originalSource = new BehaviorSubject<number>(0);
  currentFw_Cfactor_original = this.fw_Cfactor_originalSource.asObservable();
  
  public fw_Cfactor_modifiedSource = new BehaviorSubject<number>(0);
  currentFw_Cfactor_modified = this.fw_Cfactor_modifiedSource.asObservable();

  public fw_Afactor_originalSource = new BehaviorSubject<number>(0);
  currentFw_Afactor_original = this.fw_Afactor_originalSource.asObservable();
  
  public fw_Afactor_modifiedSource = new BehaviorSubject<number>(0);
  currentFw_Afactor_modified = this.fw_Afactor_modifiedSource.asObservable();

  public hw_Afactor_originalSource = new BehaviorSubject<number>(0);
  currentHw_Afactor_original = this.hw_Afactor_originalSource.asObservable();
  
  public hw_Afactor_modifiedSource = new BehaviorSubject<number>(0);
  currentHw_Afactor_modified = this.hw_Afactor_modifiedSource.asObservable();

  public hw_Bfactor_originalSource = new BehaviorSubject<number>(0);
  currentHw_Bfactor_original = this.hw_Bfactor_originalSource.asObservable();
  
  public hw_Bfactor_modifiedSource = new BehaviorSubject<number>(0);
  currentHw_Bfactor_modified = this.hw_Bfactor_modifiedSource.asObservable();

  public fw_Bfactor_originalSource = new BehaviorSubject<number>(0);
  currentFw_Bfactor_original = this.fw_Bfactor_originalSource.asObservable();
  
  public fw_Bfactor_modifiedSource = new BehaviorSubject<number>(0);
  currentFw_Bfactor_modified = this.fw_Bfactor_modifiedSource.asObservable();

  public hw_Cfactor_originalSource = new BehaviorSubject<number>(0);
  currentHw_Cfactor_original = this.hw_Cfactor_originalSource.asObservable();
  
  public hw_Cfactor_modifiedSource = new BehaviorSubject<number>(0);
  currentHw_Cfactor_modified = this.hw_Cfactor_modifiedSource.asObservable();

  public side1_Afactor_originalSource = new BehaviorSubject<number>(0);
  currentSide1_Afactor_original = this.side1_Afactor_originalSource.asObservable();
  
  public side1_Afactor_modifiedSource = new BehaviorSubject<number>(0);
  currentSide1_Afactor_modified = this.side1_Afactor_modifiedSource.asObservable();

  public side1_Bfactor_originalSource = new BehaviorSubject<number>(0);
  currentSide1_Bfactor_original = this.side1_Bfactor_originalSource.asObservable();
  
  public side1_Bfactor_modifiedSource = new BehaviorSubject<number>(0);
  currentSide1_Bfactor_modified = this.side1_Bfactor_modifiedSource.asObservable();

  public side1_Cfactor_originalSource = new BehaviorSubject<number>(0);
  currentSide1_Cfactor_original = this.side1_Cfactor_originalSource.asObservable();
  
  public side1_Cfactor_modifiedSource = new BehaviorSubject<number>(0);
  currentSide1_Cfactor_modified = this.side1_Cfactor_modifiedSource.asObservable();

  public side2_Afactor_originalSource = new BehaviorSubject<number>(0);
  currentSide2_Afactor_original = this.side2_Afactor_originalSource.asObservable();
  
  public side2_Afactor_modifiedSource = new BehaviorSubject<number>(0);
  currentSide2_Afactor_modified = this.side2_Afactor_modifiedSource.asObservable();

  public side2_Bfactor_originalSource = new BehaviorSubject<number>(0);
  currentSide2_Bfactor_original = this.side2_Bfactor_originalSource.asObservable();
  
  public side2_Bfactor_modifiedSource = new BehaviorSubject<number>(0);
  currentSide2_Bfactor_modified = this.side2_Bfactor_modifiedSource.asObservable();

  public side2_Cfactor_originalSource = new BehaviorSubject<number>(0);
  currentSide2_Cfactor_original = this.side2_Cfactor_originalSource.asObservable();
  
  public side2_Cfactor_modifiedSource = new BehaviorSubject<number>(0);
  currentSide2_Cfactor_modified = this.side2_Cfactor_modifiedSource.asObservable();

  public crownNSource = new BehaviorSubject<number>(0);
  currentCrownN = this.crownNSource.asObservable();

  public crownN_modSource = new BehaviorSubject<number>(0);
  currentCrownN_mod = this.crownN_modSource.asObservable();

  public side1NSource = new BehaviorSubject<number>(0);
  currentSide1N = this.side1NSource.asObservable();
  
  public side1N_modSource = new BehaviorSubject<number>(0);
  currentSide1N_mod = this.side1N_modSource.asObservable();

  public side2NSource = new BehaviorSubject<number>(0);
  currentSide2N = this.side2NSource.asObservable();
  
  public side2N_modSource = new BehaviorSubject<number>(0);
  currentSide2N_mod = this.side2N_modSource.asObservable();

  public fwNSource = new BehaviorSubject<number>(0);
  currentFwN = this.fwNSource.asObservable();
  
  public fwN_modSource = new BehaviorSubject<number>(0);
  currentFwN_mod = this.fwN_modSource.asObservable();

  public hwNSource = new BehaviorSubject<number>(0);
  currentHwN = this.hwNSource.asObservable();
  
  public hwN_modSource = new BehaviorSubject<number>(0);
  currentHwN_mod = this.hwN_modSource.asObservable();

  public timeFactor_crownSource = new BehaviorSubject<number>(0);
  currentTimeFactor_crown = this.timeFactor_crownSource.asObservable();

  public timeFactor_hwSource = new BehaviorSubject<number>(0);
  currentTimeFactor_hw = this.timeFactor_hwSource.asObservable();

  public timeFactor_fwSource = new BehaviorSubject<number>(0);
  currentTimeFactor_fw = this.timeFactor_fwSource.asObservable();

  public timeFactor_sw1Source = new BehaviorSubject<number>(0);
  currentTimeFactor_sw1 = this.timeFactor_sw1Source.asObservable();

  public timeFactor_sw2Source = new BehaviorSubject<number>(0);
  currentTimeFactor_sw2 = this.timeFactor_sw2Source.asObservable();

  public timeSource = new BehaviorSubject<string>('');
  currentTime = this.timeSource.asObservable();

  public stopeClassSource = new BehaviorSubject<string>('');
  currentStopeClass = this.stopeClassSource.asObservable();

  public ssurfaceSource = new BehaviorSubject<string>('');
  currentSsurface = this.ssurfaceSource.asObservable();

  public aspectRatioSource = new BehaviorSubject<number>(0);
  currentAspectRatio = this.aspectRatioSource.asObservable();

  public stopeDipSource = new BehaviorSubject<number>(0);
  currentStopeDip = this.stopeDipSource.asObservable();
 
  public JnSource = new BehaviorSubject<string>('');
  currentJn = this.JnSource.asObservable();

  public JrSource = new BehaviorSubject<string>('');
  currentJr = this.JrSource.asObservable();

  public JaSource = new BehaviorSubject<string>('');
  currentJa = this.JaSource.asObservable();

  public faultFactor_crownSource = new BehaviorSubject<number>(0);
  currentFaultFactor_crown = this.faultFactor_crownSource.asObservable();

  public faultFactor_hwSource = new BehaviorSubject<number>(0);
  currentFaultFactor_hw = this.faultFactor_hwSource.asObservable();

  public faultFactor_fwSource = new BehaviorSubject<number>(0);
  currentFaultFactor_fw = this.faultFactor_fwSource.asObservable();
 
  public faultFactor_sw1Source = new BehaviorSubject<number>(0);
  currentFaultFactor_sw1 = this.faultFactor_sw1Source.asObservable();
 
  public faultFactor_sw2Source = new BehaviorSubject<number>(0);
  currentFaultFactor_sw2 = this.faultFactor_sw2Source.asObservable();

  public fault_surfaceSource = new BehaviorSubject<string>('');
  currentFault_surface = this.fault_surfaceSource.asObservable();

  constructor() { }

  changeDepth(depth: number) {
    this.depthSource.next(depth);
  }
  changeQRes_crown(qRes_crown: number) {
    this.qRes_crownSource.next(qRes_crown);
  }
  changeQRes_fw(qRes_fw: number) {
    this.qRes_fwSource.next(qRes_fw);
  }
  changeQRes_hw(qRes_hw: number) {
    this.qRes_hwSource.next(qRes_hw);
  }
  changeQRes_sw1(qRes_sw1: number) {
    this.qRes_sw1Source.next(qRes_sw1);
  }
  changeQRes_sw2(qRes_sw2: number) {
    this.qRes_sw2Source.next(qRes_sw2);
  }
  changeQQuality_crown(qQuality_crown:string) {
    this.qQuality_crownSource.next(qQuality_crown);
  }
  changeQQuality_hw(qQuality_hw:string) {
    this.qQuality_hwSource.next(qQuality_hw);
  }
  changeQQuality_fw(qQuality_fw:string) {
    this.qQuality_fwSource.next(qQuality_fw);
  }
  changeQQuality_sw1(qQuality_sw1:string) {
    this.qQuality_sw1Source.next(qQuality_sw1);
  }
  changeQQuality_sw2(qQuality_sw2:string) {
    this.qQuality_sw2Source.next(qQuality_sw2);
  }
  changeRqd_crown(rqd_crown: number) {
    this.rqd_crownSource.next(rqd_crown);
  }
  changeRqd_hw(rqd_hw: number) {
    this.rqd_hwSource.next(rqd_hw);
  }
  changeRqd_fw(rqd_fw: number) {
    this.rqd_fwSource.next(rqd_fw);
  }
  changeRqd_sw1(rqd_sw1: number) {
    this.rqd_sw1Source.next(rqd_sw1);
  }
  changeRqd_sw2(rqd_sw2: number) {
    this.rqd_sw2Source.next(rqd_sw2);
  }
  changeRqdQuality_crown(rqdQuality_crown:string) {
    this.rqdQuality_crownSource.next(rqdQuality_crown);
  }
  changeRqdQuality_hw(rqdQuality_hw:string) {
    this.rqdQuality_hwSource.next(rqdQuality_hw);
  }
  changeRqdQuality_fw(rqdQuality_fw:string) {
    this.rqdQuality_fwSource.next(rqdQuality_fw);
  }
  changeRqdQuality_sw1(rqdQuality_sw1:string) {
    this.rqdQuality_sw1Source.next(rqdQuality_sw1);
  }
  changeRqdQuality_sw2(rqdQuality_sw2:string) {
    this.rqdQuality_sw2Source.next(rqdQuality_sw2);
  }
  changeStopeHeight(stopeHeight: number) {
    this.stopeHeightSource.next(stopeHeight);
  }
  changeStopeHeight2(stopeHeight2: number) {
    this.stopeHeight2Source.next(stopeHeight2);
  }
  changeSideTopWidth(sideTopWidth: number) {
    this.sideTopWidthSource.next(sideTopWidth);
  }
  changeSideBottomWidth(sideBottomWidth: number) {
    this.sideBottomWidthSource.next(sideBottomWidth);
  }
  changeSideLength(sideLength: number) {
    this.sideLengthSource.next(sideLength);
  }
  changeSideWidth(sideWidth: number) {
    this.sideWidthSource.next(sideWidth);
  }
  changeFhWidth(fhWidth: number) {
    this.fhWidthSource.next(fhWidth);
  }
  changeFhWidth2(fhWidth2: number) {
    this.fhWidth2Source.next(fhWidth2);
  }
  changeVolume(volume: number) {
    this.volumeSource.next(volume);
  }
  changeHrCrown(hrCrown: number) {
    this.hrCrownSource.next(hrCrown);
  }
  changeHrFoot(hrFoot: number) {
    this.hrFootSource.next(hrFoot);
  }
  changeHrHang(hrHang: number) {
    this.hrHangSource.next(hrHang);
  }
  changeHrSide(hrSide: number) {
    this.hrSideSource.next(hrSide);
  }
  changeCrownP(crownP: number) {
    this.crownPSource.next(crownP);
  }
  changeCrownA(crownA: number) {
    this.crownASource.next(crownA);
  }
  changeFootP(footP: number) {
    this.footPSource.next(footP);
  }
  changeFootA(footA: number) {
    this.footASource.next(footA);
  }
  changeHangA(hangA: number) {
    this.hangASource.next(hangA);
  }
  changeHangP(hangP: number) {
    this.hangPSource.next(hangP);
  }
  changeSideP(sideP: number) {
    this.sidePSource.next(sideP);
  }
  changeSideA(sideA: number) {
    this.sideASource.next(sideA);
  }
  changeVerticalstress(Verticalstress: number) {
    this.VerticalstressSource.next(Verticalstress);
  }
  changeHorizontalstress(Horizontalstress: number) {
    this.HorizontalstressSource.next(Horizontalstress);
  }
  changeCrownIndStress(crownIndStress: number) {
    this.crownIndStressSource.next(crownIndStress);
  }
  changeSideIndStress(sideIndStress: number) {
    this.sideIndStressSource.next(sideIndStress);
  }
  changeFwIndStress(fwIndStress: number) {
    this.fwIndStressSource.next(fwIndStress);
  }
  changeHwIndStress(hwIndStress: number) {
    this.hwIndStressSource.next(hwIndStress);
  }
  changeCrown_Afactor_original(crown_Afactor_original: number) {
    this.crown_Afactor_originalSource.next(crown_Afactor_original);
  }
  changeCrown_Bfactor_original(crown_Bfactor_original: number) {
    this.crown_Bfactor_originalSource.next(crown_Bfactor_original);
  }
  changeCrown_Cfactor_original(crown_Cfactor_original: number) {
    this.crown_Cfactor_originalSource.next(crown_Cfactor_original);
  }
  changeCrown_Afactor_modified(crown_Afactor_modified: number) {
    this.crown_Afactor_modifiedSource.next(crown_Afactor_modified);
  }
  changeCrown_Bfactor_modified(crown_Bfactor_modified: number) {
    this.crown_Bfactor_modifiedSource.next(crown_Bfactor_modified);
  }
  changeCrown_Cfactor_modified(crown_Cfactor_modified: number) {
    this.crown_Cfactor_modifiedSource.next(crown_Cfactor_modified);
  }
  changeSide1_Afactor_original(side1_Afactor_original: number) {
    this.side1_Afactor_originalSource.next(side1_Afactor_original);
  }
  changeSide1_Bfactor_original(side1_Bfactor_original: number) {
    this.side1_Bfactor_originalSource.next(side1_Bfactor_original);
  }
  changeSide1_Cfactor_original(side1_Cfactor_original: number) {
    this.side1_Cfactor_originalSource.next(side1_Cfactor_original);
  }
  changeSide1_Afactor_modified(side1_Afactor_modified: number) {
    this.side1_Afactor_modifiedSource.next(side1_Afactor_modified);
  }
  changeSide1_Bfactor_modified(side1_Bfactor_modified: number) {
    this.side1_Bfactor_modifiedSource.next(side1_Bfactor_modified);
  }
  changeSide1_Cfactor_modified(side1_Cfactor_modified: number) {
    this.side1_Cfactor_modifiedSource.next(side1_Cfactor_modified);
  }
  changeSide2_Afactor_original(side2_Afactor_original: number) {
    this.side2_Afactor_originalSource.next(side2_Afactor_original);
  }
  changeSide2_Bfactor_original(side2_Bfactor_original: number) {
    this.side2_Bfactor_originalSource.next(side2_Bfactor_original);
  }
  changeSide2_Cfactor_original(side2_Cfactor_original: number) {
    this.side2_Cfactor_originalSource.next(side2_Cfactor_original);
  }
  changeSide2_Afactor_modified(side2_Afactor_modified: number) {
    this.side2_Afactor_modifiedSource.next(side2_Afactor_modified);
  }
  changeSide2_Bfactor_modified(side2_Bfactor_modified: number) {
    this.side2_Bfactor_modifiedSource.next(side2_Bfactor_modified);
  }
  changeSide2_Cfactor_modified(side2_Cfactor_modified: number) {
    this.side2_Cfactor_modifiedSource.next(side2_Cfactor_modified);
  }
  changeFw_Cfactor_original(fw_Cfactor_original: number) {
    this.fw_Cfactor_originalSource.next(fw_Cfactor_original);
  }
  changeFw_Cfactor_modified(fw_Cfactor_modified: number) {
    this.fw_Cfactor_modifiedSource.next(fw_Cfactor_modified);
  }
  changeFw_Afactor_original(fw_Afactor_original: number) {
    this.fw_Afactor_originalSource.next(fw_Afactor_original);
  }
  changeHw_Afactor_original(hw_Afactor_original: number) {
    this.hw_Afactor_originalSource.next(hw_Afactor_original);
  }
  changeHw_Bfactor_original(hw_Bfactor_original: number) {
    this.hw_Bfactor_originalSource.next(hw_Bfactor_original);
  }
  changeFw_Bfactor_original(fw_Bfactor_original: number) {
    this.fw_Bfactor_originalSource.next(fw_Bfactor_original);
  }
  changeHw_Cfactor_original(hw_Cfactor_original: number) {
    this.hw_Cfactor_originalSource.next(hw_Cfactor_original);
  }
  changeFw_Afactor_modified(fw_Afactor_modified: number) {
    this.fw_Afactor_modifiedSource.next(fw_Afactor_modified);
  }
  changeHw_Afactor_modified(hw_Afactor_modified: number) {
    this.hw_Afactor_modifiedSource.next(hw_Afactor_modified);
  }
  changeHw_Bfactor_modified(hw_Bfactor_modified: number) {
    this.hw_Bfactor_modifiedSource.next(hw_Bfactor_modified);
  }
  changeFw_Bfactor_modified(fw_Bfactor_modified: number) {
    this.fw_Bfactor_modifiedSource.next(fw_Bfactor_modified);
  }
  changeHw_Cfactor_modified(hw_Cfactor_modified: number) {
    this.hw_Cfactor_modifiedSource.next(hw_Cfactor_modified);
  }
  changeCrownN(crownN: number) {
    this.crownNSource.next(crownN);
  }
  changeCrownN_mod(crownN_mod: number) {
    this.crownN_modSource.next(crownN_mod);
  }
  changeSide1N(side1N: number) {
    this.side1NSource.next(side1N);
  }
  changeSide1N_mod(side1N_mod: number) {
    this.side1N_modSource.next(side1N_mod);
  }
  changeSide2N(side2N: number) {
    this.side2NSource.next(side2N);
  }
  changeSide2N_mod(side2N_mod: number) {
    this.side2N_modSource.next(side2N_mod);
  }
  changeFwN(fwN: number) {
    this.fwNSource.next(fwN);
  }
  changeFwN_mod(fwN_mod: number) {
    this.fwN_modSource.next(fwN_mod);
  }
  changeHwN(hwN: number) {
    this.hwNSource.next(hwN);
  }
  changeHwN_mod(hwN_mod: number) {
    this.hwN_modSource.next(hwN_mod);
  }
  changeTimeFactor_crown(timeFactor_crown: number) {
    this.timeFactor_crownSource.next(timeFactor_crown);
  }
  changeTimeFactor_hw(timeFactor_hw: number) {
    this.timeFactor_hwSource.next(timeFactor_hw);
  }
  changeTimeFactor_fw(timeFactor_fw: number) {
    this.timeFactor_fwSource.next(timeFactor_fw);
  }
  changeTimeFactor_sw1(timeFactor_sw1: number) {
    this.timeFactor_sw1Source.next(timeFactor_sw1);
  }
  changeTimeFactor_sw2(timeFactor_sw2: number) {
    this.timeFactor_sw2Source.next(timeFactor_sw2);
  }
  changeTime(time:string) {
    this.timeSource.next(time);
  }
  changeSsurface(ssurface:string) {
    this.ssurfaceSource.next(ssurface);
  }
  changeStopeClass(stopeClass:string) {
    this.stopeClassSource.next(stopeClass);
  }
  changeAspectRatio(aspectRatio:number) {
    this.aspectRatioSource.next(aspectRatio);
  }
  changeStopeDip(stopeDip:number) {
    this.stopeDipSource.next(stopeDip);
  }
  changeJn(Jn:string) {
    this.JnSource.next(Jn);
  }
  changeJa(Ja:string) {
    this.JaSource.next(Ja);
  }
  changeJr(Jr:string) {
    this.JrSource.next(Jr);
  }
  changeFaultFactor_crown(faultFactor_crown:number) {
    this.faultFactor_crownSource.next(faultFactor_crown);
  }
  changeFaultFactor_hw(faultFactor_hw:number) {
    this.faultFactor_hwSource.next(faultFactor_hw);
  }
  changeFaultFactor_fw(faultFactor_fw:number) {
    this.faultFactor_fwSource.next(faultFactor_fw);
  }
  changeFaultFactor_sw1(faultFactor_sw1:number) {
    this.faultFactor_sw1Source.next(faultFactor_sw1);
  }
  changeFaultFactor_sw2(faultFactor_sw2:number) {
    this.faultFactor_sw2Source.next(faultFactor_sw2);
  }
  changeFault_surface(fault_surface:string) {
    this.fault_surfaceSource.next(fault_surface);
  }
}
