---
name: I_HU_ELECTRONICDOCINVOICE
description: "HU Electronicdocinvoice"
app_component: CA-GTF-CSC-EDO-HU
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
  - component:CA-GTF-CSC-EDO-HU
  - lob:Cross-Application Components
---
# I_HU_ELECTRONICDOCINVOICE

**HU Electronicdocinvoice**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-HU` |
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
| `ElectronicDocCompanyCode` |  | | `_ElectronicDocument` | `ElectronicDocCompanyCode` | `CHAR(4)` | Company Code |
| `ElectronicDocCountry` |  | | `_ElectronicDocument` | `ElectronicDocCountry` | `CHAR(3)` | Company Country/Region |
| `ElectronicDocSourceType` |  | | `_ElectronicDocument` | `ElectronicDocSourceType` | `CHAR(10)` | eDocument Source Type |
| `ElectronicDocSourceKey` |  | | `_ElectronicDocument` | `ElectronicDocSourceKey` | `CHAR(32)` | eDocument Source Key |
| `ElectronicDocType` |  | | `_ElectronicDocument` | `ElectronicDocType` | `CHAR(10)` | eDocument Type |
| `ElectronicDocProcessStatus` |  | | `_ElectronicDocument` | `ElectronicDocProcessStatus` | `CHAR(10)` | eDocument Process Status |
| `ElectronicDocProcess` |  | | `_ElectronicDocument` | `ElectronicDocProcess` | `CHAR(10)` | eDocument Process |
| `HU_ElectronicDocTransactionID` |  | |  |  | `CHAR(30)` | Transaction ID |
| `HU_ElectronicDocIsSentToCust` |  | |  |  | `CHAR(1)` | Sent to Customer |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
  usageType:{
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #TRANSACTIONAL
  },
  supportedCapabilities: [#SQL_DATA_SOURCE, 
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #UI_PROVIDER_PROJECTION_SOURCE], 
  modelingPattern: #NONE
}

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Hungary Invoice'

define view entity I_HU_ElectronicDocInvoice
  as select from R_HU_ElectronicDocInvoice
{

  key ElectronicDocUUID,
      _ElectronicDocument.ElectronicDocCompanyCode as ElectronicDocCompanyCode,
      _ElectronicDocument.ElectronicDocCountry as ElectronicDocCountry,
      _ElectronicDocument.ElectronicDocSourceType as ElectronicDocSourceType,
      _ElectronicDocument.ElectronicDocSourceKey as ElectronicDocSourceKey,
      _ElectronicDocument.ElectronicDocType as ElectronicDocType,
      _ElectronicDocument.ElectronicDocProcessStatus as ElectronicDocProcessStatus,
      _ElectronicDocument.ElectronicDocProcess as ElectronicDocProcess,
      HU_ElectronicDocTransactionID,
      HU_ElectronicDocIsSentToCust

}
```
