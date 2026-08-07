---
name: I_HU_ELECTRONICDOCINVOICE
description: HU Electronicdocinvoice
app_component: CA-GTF-CSC-EDO-HU
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ElectronicDocUUID` | ✓ | |  |  |  |  |
| `ElectronicDocCompanyCode` |  | | `_ElectronicDocument` | `ElectronicDocCompanyCode` |  |  |
| `ElectronicDocCountry` |  | | `_ElectronicDocument` | `ElectronicDocCountry` |  |  |
| `ElectronicDocSourceType` |  | | `_ElectronicDocument` | `ElectronicDocSourceType` |  |  |
| `ElectronicDocSourceKey` |  | | `_ElectronicDocument` | `ElectronicDocSourceKey` |  |  |
| `ElectronicDocType` |  | | `_ElectronicDocument` | `ElectronicDocType` |  |  |
| `ElectronicDocProcessStatus` |  | | `_ElectronicDocument` | `ElectronicDocProcessStatus` |  |  |
| `ElectronicDocProcess` |  | | `_ElectronicDocument` | `ElectronicDocProcess` |  |  |
| `HU_ElectronicDocTransactionID` |  | |  |  |  |  |
| `HU_ElectronicDocIsSentToCust` |  | |  |  |  |  |

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
