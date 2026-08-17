---
name: I_EG_ELECTRONICDOCINVOICE
description: "EG Electronicdocinvoice"
app_component: CA-GTF-CSC-EDO-EG
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
  - component:CA-GTF-CSC-EDO-EG
  - lob:Cross-Application Components
---
# I_EG_ELECTRONICDOCINVOICE

**EG Electronicdocinvoice**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-EG` |
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
| `EG_ElectronicDocOutgDocUnqID` |  | |  |  | `CHAR(32)` |  |
| `EG_ElectronicDocOutgRcvdDteTme` |  | |  |  | `DEC(15)` | eDocument Egypt: Document Received Date by ETA |
| `EG_EDocOutgSubmsnUnqID` |  | |  |  | `CHAR(32)` |  |
| `EG_EDocOutgCanclnAllwdDateTime` |  | |  |  | `DEC(15)` | eDocument Egypt: Cancellation Allowed till Date |
| `EG_EDocOutgRjcnAllwdDateTime` |  | |  |  | `DEC(15)` | eDocument Egypt: Rejection Allowed till Date |
| `EG_EDocOutgCanclnRequestDteTme` |  | |  |  | `DEC(15)` | eDocument Egypt: Cancellation Request Date |
| `EG_EDocOutgRejectionReqDateTme` |  | |  |  | `DEC(15)` | eDocument Egypt: Rejection Request Date |
| `EG_EDocOutgCanclnReqDlydDteTme` |  | |  |  | `DEC(15)` | eDocument Egypt: Decline Cancellation Allowed till Date |
| `EG_EDocOutgRjcnReqDlydDateTime` |  | |  |  | `DEC(15)` | eDocument Egypt: Decline Rejection Allowed till Date |
| `EG_EDocOutgDclnCanclnReqDteTme` |  | |  |  | `DEC(15)` | eDocument Egypt: Declined Cancel Request Date |
| `EG_EDocOutgDclnRjcnReqDateTime` |  | |  |  | `DEC(15)` | eDocument Egypt: Declined Reject Request Date |
| `EG_ElectronicDocOutgDocumentID` |  | |  |  | `CHAR(10)` | eDocument Egypt: Document ID for the Document Type |
| `EG_ElectronicDocOutgDocVersion` |  | |  |  | `CHAR(10)` | eDocument Egypt: Document Version |
| `EG_EDocOutgIsCanclnAllwd` |  | |  |  | `CHAR(1)` | eDocument Egypt: Is Cancelled |
| `EG_ElectronicDocOutgCanclnCode` |  | |  |  | `CHAR(2)` | eDocument Egypt: Cancellation Code |
| `EG_ElectronicDocCanclnRsnDesc` |  | |  |  | `CHAR(255)` | eDocument Egypt: Cancellation Reason Description |
| `EG_ElectronicDocCompanyCode` |  | | `_ElectronicDoc` | `ElectronicDocCompanyCode` | `CHAR(4)` | Company Code |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ElectronicDoc` | `I_ElectronicDoc` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'eDocument Egypt Invoice Document'
@Metadata.ignorePropagatedAnnotations: true
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@ObjectModel:{
 usageType:{
  serviceQuality: #A,
  sizeCategory: #M,
  dataClass: #MIXED
},
supportedCapabilities: [ #SQL_DATA_SOURCE, 
                           #CDS_MODELING_DATA_SOURCE,  
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #UI_PROVIDER_PROJECTION_SOURCE ]
                           }
define view entity I_EG_ElectronicDocInvoice as select from R_EG_ElectronicDocInvoice
  association [1..1] to I_ElectronicDoc as _ElectronicDoc on R_EG_ElectronicDocInvoice.ElectronicDocUUID = _ElectronicDoc.ElectronicDocUUID
{
  key ElectronicDocUUID,
      EG_ElectronicDocOutgDocUnqID,
      @Semantics.dateTime:true
      EG_ElectronicDocOutgRcvdDteTme,
      EG_EDocOutgSubmsnUnqID,
      @Semantics.dateTime:true
      EG_EDocOutgCanclnAllwdDateTime,
      @Semantics.dateTime:true
      EG_EDocOutgRjcnAllwdDateTime,
      @Semantics.dateTime:true
      EG_EDocOutgCanclnRequestDteTme,
      @Semantics.dateTime:true
      EG_EDocOutgRejectionReqDateTme,
      @Semantics.dateTime:true
      EG_EDocOutgCanclnReqDlydDteTme,
      @Semantics.dateTime:true
      EG_EDocOutgRjcnReqDlydDateTime,
      @Semantics.dateTime:true
      EG_EDocOutgDclnCanclnReqDteTme,
      @Semantics.dateTime:true
      EG_EDocOutgDclnRjcnReqDateTime,
      EG_ElectronicDocOutgDocumentID,
      EG_ElectronicDocOutgDocVersion,
      EG_EDocOutgIsCanclnAllwd,
      EG_ElectronicDocOutgCanclnCode,
      EG_ElectronicDocCanclnRsnDesc,
      _ElectronicDoc.ElectronicDocCompanyCode as EG_ElectronicDocCompanyCode
}
```
