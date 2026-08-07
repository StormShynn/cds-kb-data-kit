---
name: I_IN_ELECTRONICDOCTRANSPTREGN
description: IN Electronicdoctransptregn
app_component: CA-GTF-CSC-EDO-IN-EW
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - component:CA-GTF-CSC-EDO-IN-EW
  - lob:Cross-Application Components
---
# I_IN_ELECTRONICDOCTRANSPTREGN

**IN Electronicdoctransptregn**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-IN-EW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ElectronicDocUUID` | ✓ | |  |  |
| `ElectronicDocCompanyCode` |  | | `_ElectronicDoc` | `ElectronicDocCompanyCode` |
| `ElectronicDocCountry` |  | | `_ElectronicDoc` | `ElectronicDocCountry` |
| `ElectronicDocSourceType` |  | | `_ElectronicDoc` | `ElectronicDocSourceType` |
| `ElectronicDocSourceKey` |  | | `_ElectronicDoc` | `ElectronicDocSourceKey` |
| `ElectronicDocType` |  | | `_ElectronicDoc` | `ElectronicDocType` |
| `ElectronicDocProcessStatus` |  | | `_ElectronicDoc` | `ElectronicDocProcessStatus` |
| `ElectronicDocProcess` |  | | `_ElectronicDoc` | `ElectronicDocProcess` |
| `ElectronicDocSequenceNmbr` |  | |  |  |
| `IN_ElectronicDocEWbillNmbr` |  | |  |  |
| `IN_EDocEWbillCreateDate` |  | |  |  |
| `IN_EDocEWbillCreateTime` |  | |  |  |
| `IN_EDocEWbillValidityDate` |  | |  |  |
| `IN_EDocEWbillValidityTime` |  | |  |  |
| `IN_EDocTransptDocNmbr` |  | |  |  |
| `IN_EDocTransptDocDate` |  | |  |  |
| `IN_EDocTransptDistanceVal` |  | |  |  |
| `IN_EDocRmngTransptDstncVal` |  | |  |  |
| `IN_EDocVehicleNumber` |  | |  |  |
| `IN_ElectronicDocVehicleType` |  | |  |  |
| `IN_ElectronicDocFromPlaceTxt` |  | |  |  |
| `IN_ElectronicDocFromState` |  | |  |  |
| `IN_ElectronicDocTransptMode` |  | |  |  |
| `IN_EDocEWbillModifReasonCode` |  | |  |  |
| `IN_EDocEWbillModifRemarksTxt` |  | |  |  |
| `IN_EDocTransptrUpdtDate` |  | |  |  |
| `IN_EDocEWbillUpdtDate` |  | |  |  |
| `IN_EDocEWbillUpdtTime` |  | |  |  |
| `IN_EDocEWbillValdtyExtnRsnCode` |  | |  |  |
| `IN_EWbillValdtyExtnRemarksTxt` |  | |  |  |
| `IN_EDocEWbillCancRsnCode` |  | |  |  |
| `IN_EDocEWbillCancelDate` |  | |  |  |
| `IN_EDocEWbillCancelTime` |  | |  |  |
| `IN_EDocEWbillCancRemarksTxt` |  | |  |  |
| `IN_ElectronicDocIsCancFlag` |  | |  |  |
| `IN_ElectronicDocEditActionFlag` |  | |  |  |
| `IN_ElectronicDocInvcNmbr` |  | |  |  |
| `IN_ElectronicDocBusinessPlace` |  | |  |  |
| `IN_EDocEWbillIsContingencyFlag` |  | |  |  |
| `IN_ElectronicDocTransptrName` |  | |  |  |
| `IN_ElectronicDocTransptrGSTIN` |  | |  |  |
| `IN_EDocEWbillCtptyRejectStatus` |  | |  |  |
| `IN_ElectronicDocCsgnmtStatus` |  | |  |  |
| `IN_EDocEWbillTransitType` |  | |  |  |
| `IN_EDocEWbillFromPinCode` |  | |  |  |
| `IN_EDocEWbillExtnAddrLine1Txt` |  | |  |  |
| `IN_EDocEWbillExtnAddrLine2Txt` |  | |  |  |
| `IN_EDocEWbillExtnAddrLine3Txt` |  | |  |  |
| `IN_EDocEWbillIsMultiVehFlag` |  | |  |  |
| `IN_ElectronicDocSubSupplyDesc` |  | |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'India eWay Bill details'
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  usageType:{
    serviceQuality: #C,
    sizeCategory: #M,
    dataClass: #MIXED
  },
  supportedCapabilities: [#SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET],
  modelingPattern: #NONE
} 
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
define view entity I_IN_ElectronicDocTransptRegn
  as select from R_IN_ElectronicDocTransptRegn
{
  key ElectronicDocUUID,
      _ElectronicDoc.ElectronicDocCompanyCode as ElectronicDocCompanyCode,
      _ElectronicDoc.ElectronicDocCountry as ElectronicDocCountry,
      _ElectronicDoc.ElectronicDocSourceType as ElectronicDocSourceType,
      _ElectronicDoc.ElectronicDocSourceKey as ElectronicDocSourceKey,
      _ElectronicDoc.ElectronicDocType as ElectronicDocType,
      _ElectronicDoc.ElectronicDocProcessStatus as ElectronicDocProcessStatus,
      _ElectronicDoc.ElectronicDocProcess as ElectronicDocProcess,
      ElectronicDocSequenceNmbr,
      IN_ElectronicDocEWbillNmbr,
      IN_EDocEWbillCreateDate,
      IN_EDocEWbillCreateTime,
      IN_EDocEWbillValidityDate,
      IN_EDocEWbillValidityTime,
      IN_EDocTransptDocNmbr,
      IN_EDocTransptDocDate,
      IN_EDocTransptDistanceVal,
      IN_EDocRmngTransptDstncVal,
      IN_EDocVehicleNumber,
      IN_ElectronicDocVehicleType,
      IN_ElectronicDocFromPlaceTxt,
      IN_ElectronicDocFromState,
      IN_ElectronicDocTransptMode,
      IN_EDocEWbillModifReasonCode,
      IN_EDocEWbillModifRemarksTxt,
      IN_EDocTransptrUpdtDate,
      IN_EDocEWbillUpdtDate,
      IN_EDocEWbillUpdtTime,
      IN_EDocEWbillValdtyExtnRsnCode,
      IN_EWbillValdtyExtnRemarksTxt,
      IN_EDocEWbillCancRsnCode,
      IN_EDocEWbillCancelDate,
      IN_EDocEWbillCancelTime,
      IN_EDocEWbillCancRemarksTxt,
      IN_ElectronicDocIsCancFlag,
      IN_ElectronicDocEditActionFlag,
      IN_ElectronicDocInvcNmbr,
      IN_ElectronicDocBusinessPlace,
      IN_EDocEWbillIsContingencyFlag,
      IN_ElectronicDocTransptrName,
      IN_ElectronicDocTransptrGSTIN,
      IN_EDocEWbillCtptyRejectStatus,
      IN_ElectronicDocCsgnmtStatus,
      IN_EDocEWbillTransitType,
      IN_EDocEWbillFromPinCode,
      IN_EDocEWbillExtnAddrLine1Txt,
      IN_EDocEWbillExtnAddrLine2Txt,
      IN_EDocEWbillExtnAddrLine3Txt,
      IN_EDocEWbillIsMultiVehFlag,
      IN_ElectronicDocSubSupplyDesc

}
```
