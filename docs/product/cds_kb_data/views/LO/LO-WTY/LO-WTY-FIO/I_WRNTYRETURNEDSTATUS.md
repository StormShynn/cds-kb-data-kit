---
name: I_WRNTYRETURNEDSTATUS
description: "Wrntyreturnedstatus"
app_component: LO-WTY-FIO
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
  - LO
  - LO-WTY
  - interface-view
  - status
  - component:LO-WTY-FIO
  - lob:Logistics General
---
# I_WRNTYRETURNEDSTATUS

**Wrntyreturnedstatus**

| Property | Value |
|---|---|
| App Component | `LO-WTY-FIO` |
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
| `WrntyClaimReturnedPartner` | ✓ | |  | `partn` |  |  |
| `WrntySupplierReturnParts` | ✓ | |  | `retpa` |  |  |
| `WrntyIsPartlyReceived` |  | |  | `prtly` |  |  |
| `WrntyPartsIsDeadlineRelevant` |  | |  | `strel` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_WrntyReturnedStatusText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Status for Parts to be returned'
@ObjectModel:{
//    representativeKey: 'WrntyClaimReturnedPartner',//Commenting out due to ATC error '@ObjectModel.foreignKey.association missing'--JJ
    usageType:{
        dataClass       : #ORGANIZATIONAL,
        serviceQuality  : #A,
        sizeCategory    : #S
        },
    supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                           #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, 
                           #EXTRACTION_DATA_SOURCE]
}
@ObjectModel.sapObjectNodeType.name : 'WarrantyClaim'
@VDM.viewType: #BASIC //*******Modernization Task********
//@VDM.viewType: #COMPOSITE 
@Feature: 'LO_WTY_CLAIM_MANAGEMENT'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@Analytics:{ dataExtraction.enabled: true,
             internalName:#LOCAL }
@Analytics.technicalName: 'IWRNTYCLMRT'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_WrntyReturnedStatus
  as select from cwty004
  association [1..*] to I_WrntyReturnedStatusText as _Text on  $projection.WrntyClaimReturnedPartner = _Text.WrntyClaimReturnedPartner
                                                           and $projection.WrntySupplierReturnParts  = _Text.WrntySupplierReturnParts
{
  key     partn as WrntyClaimReturnedPartner,
          @ObjectModel.text.association: '_Text'
  key     retpa as WrntySupplierReturnParts,
          @Semantics.booleanIndicator :true
          prtly as WrntyIsPartlyReceived,
          @Semantics.booleanIndicator :true
          strel as WrntyPartsIsDeadlineRelevant,
          _Text
}
```
