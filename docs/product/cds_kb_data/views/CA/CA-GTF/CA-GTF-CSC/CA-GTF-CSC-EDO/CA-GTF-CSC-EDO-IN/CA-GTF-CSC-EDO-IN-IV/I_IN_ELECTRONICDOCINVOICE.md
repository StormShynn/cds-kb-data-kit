---
name: I_IN_ELECTRONICDOCINVOICE
description: "IN Electronicdocinvoice"
app_component: CA-GTF-CSC-EDO-IN-IV
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - component:CA-GTF-CSC-EDO-IN-IV
  - lob:Cross-Application Components
---
# I_IN_ELECTRONICDOCINVOICE

**IN Electronicdocinvoice**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-IN-IV` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ElectronicDocUUID` | ✓ | |  |  |  |  |
| `ElectronicDocCompanyCode` |  | | `_ElectronicDoc` | `ElectronicDocCompanyCode` |  |  |
| `ElectronicDocCountry` |  | | `_ElectronicDoc` | `ElectronicDocCountry` |  |  |
| `ElectronicDocSourceType` |  | | `_ElectronicDoc` | `ElectronicDocSourceType` |  |  |
| `ElectronicDocSourceKey` |  | | `_ElectronicDoc` | `ElectronicDocSourceKey` |  |  |
| `ElectronicDocType` |  | | `_ElectronicDoc` | `ElectronicDocType` |  |  |
| `ElectronicDocProcessStatus` |  | | `_ElectronicDoc` | `ElectronicDocProcessStatus` |  |  |
| `ElectronicDocProcess` |  | | `_ElectronicDoc` | `ElectronicDocProcess` |  |  |
| `IN_EDocEInvcExtNmbr` |  | |  |  |  |  |
| `IN_EDocEInvcBusinessPlace` |  | |  |  |  |  |
| `IN_ElectronicDocInvcRefNmbr` |  | |  |  |  |  |
| `IN_ElectronicDocAcknNmbr` |  | |  |  |  |  |
| `IN_ElectronicDocAcknDate` |  | |  |  |  |  |
| `IN_ElectronicDocAcknTime` |  | |  |  |  |  |
| `IN_ElectronicDocCancelDate` |  | |  |  |  |  |
| `IN_ElectronicDocCancelTime` |  | |  |  |  |  |
| `IN_ElectronicDocCancReasonCode` |  | |  |  |  |  |
| `IN_EDocCancelRemarksTxt` |  | |  |  |  |  |
| `IN_ElectronicDocQRCodeTxt` |  | |  |  |  |  |
| `IN_EDocEInvcEWbillNmbr` |  | |  |  |  |  |
| `IN_EDocEInvcEWbillCreateDate` |  | |  |  |  |  |
| `IN_EDocEInvcEWbillCreateTime` |  | |  |  |  |  |
| `IN_EDocEInvcEWbillValidityDate` |  | |  |  |  |  |
| `IN_EDocEInvcEWbillValidityTime` |  | |  |  |  |  |
| `IN_EDocEWbillStatus` |  | |  |  |  |  |
| `IN_EDocEInvcEditActionFlag` |  | |  |  |  |  |
| `IN_EDocEInvcTransptDocNmbr` |  | |  |  |  |  |
| `IN_EDocEInvcTransptDocDate` |  | |  |  |  |  |
| `IN_EDocEInvcTransptDstncVal` |  | |  |  |  |  |
| `IN_EDocEInvcVehicleNumber` |  | |  |  |  |  |
| `IN_EDocEInvcVehicleType` |  | |  |  |  |  |
| `IN_EDocEInvcTransptMode` |  | |  |  |  |  |
| `IN_EDocEInvcTransptrName` |  | |  |  |  |  |
| `IN_EDocEInvcTransptrGSTIN` |  | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'India eInvoice details'
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
define view entity I_IN_ElectronicDocInvoice
  as select from R_IN_ElectronicDocInvoice
  
{
  key ElectronicDocUUID,
      _ElectronicDoc.ElectronicDocCompanyCode as ElectronicDocCompanyCode,
      _ElectronicDoc.ElectronicDocCountry as ElectronicDocCountry,
      _ElectronicDoc.ElectronicDocSourceType as ElectronicDocSourceType,
      _ElectronicDoc.ElectronicDocSourceKey as ElectronicDocSourceKey,
      _ElectronicDoc.ElectronicDocType as ElectronicDocType,
      _ElectronicDoc.ElectronicDocProcessStatus as ElectronicDocProcessStatus,
      _ElectronicDoc.ElectronicDocProcess as ElectronicDocProcess,
      IN_EDocEInvcExtNmbr,
      IN_EDocEInvcBusinessPlace,
      IN_ElectronicDocInvcRefNmbr,
      IN_ElectronicDocAcknNmbr,
      IN_ElectronicDocAcknDate,
      IN_ElectronicDocAcknTime,
      IN_ElectronicDocCancelDate,
      IN_ElectronicDocCancelTime,
      IN_ElectronicDocCancReasonCode,
      IN_EDocCancelRemarksTxt,
      IN_ElectronicDocQRCodeTxt,
      IN_EDocEInvcEWbillNmbr,
      IN_EDocEInvcEWbillCreateDate,
      IN_EDocEInvcEWbillCreateTime,
      IN_EDocEInvcEWbillValidityDate,
      IN_EDocEInvcEWbillValidityTime,
      IN_EDocEWbillStatus,
      IN_EDocEInvcEditActionFlag,
      IN_EDocEInvcTransptDocNmbr,
      IN_EDocEInvcTransptDocDate,
      IN_EDocEInvcTransptDstncVal,
      IN_EDocEInvcVehicleNumber,
      IN_EDocEInvcVehicleType,
      IN_EDocEInvcTransptMode,
      IN_EDocEInvcTransptrName,
      IN_EDocEInvcTransptrGSTIN

}
```
