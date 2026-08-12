---
name: I_CO_ELECTRONICDOCINVOICE
description: "CO Electronicdocinvoice"
app_component: CA-GTF-CSC-EDO-CO
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
  - component:CA-GTF-CSC-EDO-CO
  - lob:Cross-Application Components
---
# I_CO_ELECTRONICDOCINVOICE

**CO Electronicdocinvoice**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-CO` |
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
| `ElectronicDocUUID` | ✓ | |  |  |  |  |
| `CO_ElectronicDocOfficialNumber` |  | |  |  |  |  |
| `CO_ElectronicDocUniqueID` |  | |  |  |  |  |
| `CO_ElectronicDocIsSentToCust` |  | |  |  |  |  |
| `CO_EDocSignatureBinary` |  | |  |  |  |  |
| `CO_ElectronicDocDateTime` |  | |  |  |  |  |
| `CO_ElectronicDocVarblKey` |  | |  |  |  |  |
| `CO_ElectronicDocTrackID` |  | |  |  |  |  |

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
                          #CDS_MODELING_ASSOCIATION_TARGET],
  modelingPattern: #NONE
}

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Colombia Invoice'

define view entity I_CO_ElectronicDocInvoice
  as select from R_CO_ElectronicDocInvoice
{

  key ElectronicDocUUID,
      CO_ElectronicDocOfficialNumber,
      CO_ElectronicDocUniqueID,
      CO_ElectronicDocIsSentToCust,
      CO_EDocSignatureBinary,
      @Semantics.dateTime: true
      CO_ElectronicDocDateTime,
      CO_ElectronicDocVarblKey,
      CO_ElectronicDocTrackID

}
```
