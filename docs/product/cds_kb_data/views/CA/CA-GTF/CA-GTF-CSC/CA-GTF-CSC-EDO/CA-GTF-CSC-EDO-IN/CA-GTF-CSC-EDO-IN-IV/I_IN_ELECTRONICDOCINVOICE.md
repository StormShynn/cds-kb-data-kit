---
name: I_IN_ELECTRONICDOCINVOICE
description: "IN Electronicdocinvoice"
app_component: CA-GTF-CSC-EDO-IN-IV
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
| `IN_EDocEInvcExtNmbr` |  | |  |  | `CHAR(16)` | eDocument India eInvoice: Invoice Number (ODN) |
| `IN_EDocEInvcBusinessPlace` |  | |  |  | `CHAR(4)` | Business Place |
| `IN_ElectronicDocInvcRefNmbr` |  | |  |  | `CHAR(64)` | eDocument India eInvoice: Invoice Registration Number(IRN) |
| `IN_ElectronicDocAcknNmbr` |  | |  |  | `CHAR(20)` | eDocument India eInvoice: Acknowledgement Number |
| `IN_ElectronicDocAcknDate` |  | |  |  | `DATS(8)` | eDocument India eInvoice: Acknowledgement Date |
| `IN_ElectronicDocAcknTime` |  | |  |  | `TIMS(6)` | eDocument India eInvoice: Acknowledgement Time |
| `IN_ElectronicDocCancelDate` |  | |  |  | `DATS(8)` | eDocument India eInvoice: Cancellation Date |
| `IN_ElectronicDocCancelTime` |  | |  |  | `TIMS(6)` | eDocument India eInvoice: Cancellation Time |
| `IN_ElectronicDocCancReasonCode` |  | |  |  | `CHAR(2)` | eDocument India eInvoice: Cancellation Reason Code |
| `IN_EDocCancelRemarksTxt` |  | |  |  | `CHAR(100)` | eDocument India eInvoice: Cancellation Remarks |
| `IN_ElectronicDocQRCodeTxt` |  | |  |  |  |  |
| `IN_EDocEInvcEWbillNmbr` |  | |  |  | `NUMC(12)` | eDocument India: eWayBill Number |
| `IN_EDocEInvcEWbillCreateDate` |  | |  |  | `DATS(8)` | eDocument India: eWay Bill Creation Date |
| `IN_EDocEInvcEWbillCreateTime` |  | |  |  | `TIMS(6)` | eDocument India: eWay Bill Creation Time |
| `IN_EDocEInvcEWbillValidityDate` |  | |  |  | `DATS(8)` | eDocument India: eWay Bill - Valid To |
| `IN_EDocEInvcEWbillValidityTime` |  | |  |  | `TIMS(6)` | eDocument India: eWay Bill Validity Ends at |
| `IN_EDocEWbillStatus` |  | |  |  | `CHAR(6)` | eDocument India eInvoice: eWay Bill Status |
| `IN_EDocEInvcEditActionFlag` |  | |  |  | `CHAR(1)` | eDocument India eInvoice: Edit Flag |
| `IN_EDocEInvcTransptDocNmbr` |  | |  |  | `CHAR(15)` | eWay Bill Transport Document Number |
| `IN_EDocEInvcTransptDocDate` |  | |  |  | `DATS(8)` | eWay Bill Transport Document Date |
| `IN_EDocEInvcTransptDstncVal` |  | |  |  | `NUMC(5)` | eWay Bill Transport Distance in KM |
| `IN_EDocEInvcVehicleNumber` |  | |  |  | `CHAR(15)` | eWay Bill Vehicle Number |
| `IN_EDocEInvcVehicleType` |  | |  |  | `CHAR(1)` | eWay Bill Vehicle Type |
| `IN_EDocEInvcTransptMode` |  | |  |  | `NUMC(3)` | eWay Bill Transport Mode |
| `IN_EDocEInvcTransptrName` |  | |  |  | `CHAR(100)` | eDocument India: Transporter Name |
| `IN_EDocEInvcTransptrGSTIN` |  | |  |  | `CHAR(15)` | eDocument India: Transporter GSTIN number |

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
