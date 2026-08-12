---
name: I_WARRANTYRETURNEDPARTSSTATUS
description: "Warrantyreturnedpartsstatus"
app_component: LO-WTY-FIO
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_WARRANTYRETURNEDPARTSSTATUS

**Warrantyreturnedpartsstatus**

| Property | Value |
|---|---|
| App Component | `LO-WTY-FIO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
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
| `_Text` | `I_WrntyReturnedPartsStatusText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Status for Parts to be returned'
@ObjectModel:{
//      representativeKey: 'WrntyClaimReturnedPartner',  //Commenting out due to ATC error '@ObjectModel.foreignKey.association missing
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
@VDM:{viewType: #BASIC, //*******Modernization Task********
//@VDM:{viewType: #COMPOSITE,
          lifecycle.contract.type: #PUBLIC_LOCAL_API
          }
          @Metadata.ignorePropagatedAnnotations: true
@Analytics:{ dataExtraction.enabled: true,
             internalName:#LOCAL }
@Analytics.technicalName: 'IWRNTYCLMRTST'
@Feature: 'LO_WTY_CLAIM_MANAGEMENT'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */

define view entity I_WarrantyReturnedPartsStatus
  as select from cwty004
  association [1..*] to I_WrntyReturnedPartsStatusText as _Text      on  $projection.WrntyClaimReturnedPartner = _Text.WrntyClaimReturnedPartner
                                                                     and $projection.WrntySupplierReturnParts  = _Text.WrntySupplierReturnParts
  //                                                           and $projection.WrntySupplierReturnParts  = _Text.WrntySupplierReturnParts
  //                                                           and _Text.Language = $session.system_language
{
          //  key     _Text.Language,
  key     partn as WrntyClaimReturnedPartner,
          @ObjectModel.text.association: '_Text'
  key     retpa as WrntySupplierReturnParts,
          @Semantics.booleanIndicator :true
          prtly as WrntyIsPartlyReceived,
          @Semantics.booleanIndicator :true
          strel as WrntyPartsIsDeadlineRelevant,
          //          _Text.Language,
          _Text
}
```
