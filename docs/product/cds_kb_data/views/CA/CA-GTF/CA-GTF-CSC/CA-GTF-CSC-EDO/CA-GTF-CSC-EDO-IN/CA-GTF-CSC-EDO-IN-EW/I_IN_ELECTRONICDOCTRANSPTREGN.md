---
name: I_IN_ELECTRONICDOCTRANSPTREGN
description: "IN Electronicdoctransptregn"
app_component: CA-GTF-CSC-EDO-IN-EW
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ElectronicDocUUID` | ✓ | |  |  | `CHAR(32)` | eDocument: GUID |
| `ElectronicDocCompanyCode` |  | | `_ElectronicDoc` | `ElectronicDocCompanyCode` | `CHAR(4)` | Company Code |
| `ElectronicDocCountry` |  | | `_ElectronicDoc` | `ElectronicDocCountry` | `CHAR(3)` | Company Country/Region |
| `ElectronicDocSourceType` |  | | `_ElectronicDoc` | `ElectronicDocSourceType` | `CHAR(10)` | eDocument Source Type |
| `ElectronicDocSourceKey` |  | | `_ElectronicDoc` | `ElectronicDocSourceKey` | `CHAR(32)` | eDocument Source Key |
| `ElectronicDocType` |  | | `_ElectronicDoc` | `ElectronicDocType` | `CHAR(10)` | eDocument Type |
| `ElectronicDocProcessStatus` |  | | `_ElectronicDoc` | `ElectronicDocProcessStatus` | `CHAR(10)` | eDocument Process Status |
| `ElectronicDocProcess` |  | | `_ElectronicDoc` | `ElectronicDocProcess` | `CHAR(10)` | eDocument Process |
| `ElectronicDocSequenceNmbr` |  | |  |  | `NUMC(3)` | eDocument Sequence Number |
| `IN_ElectronicDocEWbillNmbr` |  | |  |  | `NUMC(12)` | eWay Bill Number |
| `IN_EDocEWbillCreateDate` |  | |  |  | `DATS(8)` | eWay Bill Creation Date |
| `IN_EDocEWbillCreateTime` |  | |  |  | `TIMS(6)` | eWay Bill Creation Time |
| `IN_EDocEWbillValidityDate` |  | |  |  | `DATS(8)` | eWay Bill - Valid To |
| `IN_EDocEWbillValidityTime` |  | |  |  | `TIMS(6)` | eWay Bill Validity Ends at |
| `IN_EDocTransptDocNmbr` |  | |  |  | `CHAR(15)` | eWay Bill Transport Document Number |
| `IN_EDocTransptDocDate` |  | |  |  | `DATS(8)` | eWay Bill Transport Document Date |
| `IN_EDocTransptDistanceVal` |  | |  |  | `NUMC(5)` | eWay Bill Transport Distance in KM |
| `IN_EDocRmngTransptDstncVal` |  | |  |  | `NUMC(5)` | eWay Bill Remaining Transport Distance in KM |
| `IN_EDocVehicleNumber` |  | |  |  | `CHAR(15)` | eWay Bill Vehicle Number |
| `IN_ElectronicDocVehicleType` |  | |  |  | `CHAR(1)` | eWay Bill Vehicle Type |
| `IN_ElectronicDocFromPlaceTxt` |  | |  |  | `CHAR(50)` | eWay Bill From Place |
| `IN_ElectronicDocFromState` |  | |  |  | `CHAR(3)` | eWay Bill From State |
| `IN_ElectronicDocTransptMode` |  | |  |  | `NUMC(3)` | eWay Bill Transport Mode |
| `IN_EDocEWbillModifReasonCode` |  | |  |  | `NUMC(2)` | eWay Bill Reason Code for Vehicle Change |
| `IN_EDocEWbillModifRemarksTxt` |  | |  |  | `CHAR(50)` | eWay Bill Reason Remarks |
| `IN_EDocTransptrUpdtDate` |  | |  |  | `DATS(8)` | eWay Bill Transporter ID Updated Date |
| `IN_EDocEWbillUpdtDate` |  | |  |  | `DATS(8)` | eWay Bill Last Updated Date |
| `IN_EDocEWbillUpdtTime` |  | |  |  | `TIMS(6)` | eWay Bill Last Updated Time |
| `IN_EDocEWbillValdtyExtnRsnCode` |  | |  |  | `NUMC(1)` | eWay Bill Validity Extend Reason Code |
| `IN_EWbillValdtyExtnRemarksTxt` |  | |  |  | `CHAR(50)` | eWay Bill Validity Extension Remarks |
| `IN_EDocEWbillCancRsnCode` |  | |  |  | `NUMC(1)` | eWay Bill Cancellation Reason Code |
| `IN_EDocEWbillCancelDate` |  | |  |  | `DATS(8)` | eWay Bill Cancellation Date |
| `IN_EDocEWbillCancelTime` |  | |  |  | `TIMS(6)` | eWay Bill Cancellation Time |
| `IN_EDocEWbillCancRemarksTxt` |  | |  |  | `CHAR(50)` | eWay Bill Cancellation Remarks |
| `IN_ElectronicDocIsCancFlag` |  | |  |  | `CHAR(1)` | eWay Bill Cancel eDocument Flag |
| `IN_ElectronicDocEditActionFlag` |  | |  |  | `NUMC(1)` | eWay Bill Edit Action |
| `IN_ElectronicDocInvcNmbr` |  | |  |  | `CHAR(16)` | eWay Bill Source Document Number (ODN) |
| `IN_ElectronicDocBusinessPlace` |  | |  |  | `CHAR(4)` | Business Place |
| `IN_EDocEWbillIsContingencyFlag` |  | |  |  | `CHAR(1)` | eWay Bill Contingency Flag |
| `IN_ElectronicDocTransptrName` |  | |  |  | `CHAR(100)` | eWay Bill Transporter Name |
| `IN_ElectronicDocTransptrGSTIN` |  | |  |  | `CHAR(15)` | eWay Bill Transporter GSTIN |
| `IN_EDocEWbillCtptyRejectStatus` |  | |  |  | `CHAR(10)` | eWay Bill Counter Party Reject Status |
| `IN_ElectronicDocCsgnmtStatus` |  | |  |  | `CHAR(1)` | eWay Bill Consignment Status |
| `IN_EDocEWbillTransitType` |  | |  |  | `CHAR(1)` | eWay Bill Transit Type |
| `IN_EDocEWbillFromPinCode` |  | |  |  | `INT4(10)` | eWay Bill From Pincode |
| `IN_EDocEWbillExtnAddrLine1Txt` |  | |  |  | `CHAR(120)` | eWay Bill Address Line 1 |
| `IN_EDocEWbillExtnAddrLine2Txt` |  | |  |  | `CHAR(120)` | eWay Bill Address Line 2 |
| `IN_EDocEWbillExtnAddrLine3Txt` |  | |  |  | `CHAR(120)` | eWay Bill Address Line 3 |
| `IN_EDocEWbillIsMultiVehFlag` |  | |  |  | `CHAR(1)` | eWay Bill Multi Vehicle Flag |
| `IN_ElectronicDocSubSupplyDesc` |  | |  |  | `CHAR(20)` | eWay Bill Other Sub Supply Description |

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
