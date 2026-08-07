---
name: I_EG_ELECTRONICDOCINCGINVOICE
description: EG Electronicdocincginvoice
app_component: CA-GTF-CSC-EDO-EG
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
  - component:CA-GTF-CSC-EDO-EG
  - lob:Cross-Application Components
---
# I_EG_ELECTRONICDOCINCGINVOICE

**EG Electronicdocincginvoice**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-EG` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ElectronicDocUUID` | ✓ | |  |  |
| `EG_ElectronicDocIncgDocUnqID` |  | |  |  |
| `EG_ElectronicDocIncgRcvdDteTme` |  | |  |  |
| `EG_EDocIncgCanclnAllwdDateTime` |  | |  |  |
| `EG_EDocIncgRjcnAllwdDateTime` |  | |  |  |
| `EG_EDocIncgCanclnRequestDteTme` |  | |  |  |
| `EG_EDocIncgRejectionReqDateTme` |  | |  |  |
| `EG_EDocIncgCanclnReqDlydDteTme` |  | |  |  |
| `EG_EDocIncgRjcnReqDlydDateTime` |  | |  |  |
| `EG_EDocIncgDclnCanclnReqDteTme` |  | |  |  |
| `EG_EDocIncgDclnRjcnReqDateTime` |  | |  |  |
| `EG_ElectronicDocIncgDocumentID` |  | |  |  |
| `EG_ElectronicDocIncgDocVersion` |  | |  |  |
| `EG_EDocIncgIsRejectionAllwd` |  | |  |  |
| `EG_ElectronicDocIncgRjcnCode` |  | |  |  |
| `EG_ElectronicDocIncgRjcnDesc` |  | |  |  |
| `EG_ElectronicDocInternalIDIncg` |  | |  |  |
| `EG_ElectronicDocIncgPORef` |  | |  |  |
| `EG_ElectronicDocCompanyCode` |  | | `_ElectronicDoc` | `ElectronicDocCompanyCode` |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ElectronicDoc` | `I_ElectronicDoc` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'eDocument Egypt Incoming Documents'
@Metadata.ignorePropagatedAnnotations: true
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@ObjectModel:{
 usageType:{
  serviceQuality: #A,
  sizeCategory: #M,
  dataClass: #MIXED },
supportedCapabilities: [ #SQL_DATA_SOURCE, 
                           #CDS_MODELING_DATA_SOURCE,  
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #UI_PROVIDER_PROJECTION_SOURCE ]
                           }
define view entity I_EG_ElectronicDocIncgInvoice as select from R_EG_ElectronicDocIncgInvoice
    association [1..1] to I_ElectronicDoc as _ElectronicDoc on R_EG_ElectronicDocIncgInvoice.ElectronicDocUUID = _ElectronicDoc.ElectronicDocUUID
{
  key  ElectronicDocUUID,
       EG_ElectronicDocIncgDocUnqID,
       @Semantics.dateTime:true
       EG_ElectronicDocIncgRcvdDteTme,
       @Semantics.dateTime:true
       EG_EDocIncgCanclnAllwdDateTime,
       @Semantics.dateTime:true
       EG_EDocIncgRjcnAllwdDateTime,
       @Semantics.dateTime:true
       EG_EDocIncgCanclnRequestDteTme,
       @Semantics.dateTime:true
       EG_EDocIncgRejectionReqDateTme,
       @Semantics.dateTime:true
       EG_EDocIncgCanclnReqDlydDteTme,
       @Semantics.dateTime:true
       EG_EDocIncgRjcnReqDlydDateTime,
       @Semantics.dateTime:true
       EG_EDocIncgDclnCanclnReqDteTme,
       @Semantics.dateTime:true
       EG_EDocIncgDclnRjcnReqDateTime,
       EG_ElectronicDocIncgDocumentID,
       EG_ElectronicDocIncgDocVersion,
       EG_EDocIncgIsRejectionAllwd,
       EG_ElectronicDocIncgRjcnCode,
       EG_ElectronicDocIncgRjcnDesc,
       EG_ElectronicDocInternalIDIncg,
       EG_ElectronicDocIncgPORef,
       _ElectronicDoc.ElectronicDocCompanyCode as EG_ElectronicDocCompanyCode
}
```
