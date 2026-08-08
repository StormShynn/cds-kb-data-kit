---
name: I_WRNTYRETURNEDPARTSSTATUSTEXT
description: "Wrntyreturnedpartsstatustext"
app_component: LO-WTY-FIO
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-WTY
  - interface-view
  - text-view
  - text
  - status
  - component:LO-WTY-FIO
  - lob:Logistics General
---
# I_WRNTYRETURNEDPARTSSTATUSTEXT

**Wrntyreturnedpartsstatustext**

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
| `Language` | ✓ | |  | `spras` |  |  |
| `WrntySupplierReturnParts` | ✓ | |  | `retpa` |  |  |
| `WrntySupplierReturnPartsText` |  | |  | `retpa_txt` |  |  |
| `_ReturnSts` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ReturnSts` | `I_WrntyReturnedStatus` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Return Parts Status - Text'
@ObjectModel:{
//    //representativeKey: 'WrntyClaimReturnedPartner',//Commenting out due to ATC error '@ObjectModel.foreignKey.association missing'--JJ
//    representativeKey: 'WrntySupplierReturnParts',
    usageType:{
        dataClass       : #ORGANIZATIONAL,
        serviceQuality  : #A,
        sizeCategory    : #S
        },
    supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                           #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, 
                           #EXTRACTION_DATA_SOURCE] 
}
@VDM.viewType: #BASIC //*******Modernization Task********
//@VDM.viewType: #COMPOSITE
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IWRNTYCLMRTSTTXT'
@Feature: 'LO_WTY_CLAIM_MANAGEMENT'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@Analytics:{ dataExtraction.enabled: true,
             internalName:#LOCAL }
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_WrntyReturnedPartsStatusText
  as select from cwty004t
    association [1..1] to I_WrntyReturnedStatus as _ReturnSts on $projection.WrntyClaimReturnedPartner = _ReturnSts.WrntyClaimReturnedPartner
                                                             and  $projection.WrntySupplierReturnParts = _ReturnSts.WrntySupplierReturnParts
  association [0..1] to I_Language                    as _Language  on  $projection.Language = _Language.Language
{
  key    partn     as WrntyClaimReturnedPartner,
         @Semantics.language: true
         @ObjectModel.foreignKey.association: '_Language'
  key    spras     as Language,
  key    retpa     as WrntySupplierReturnParts,
         //  key    retpa     as WrntyReturnPartsFrmCustStatus,
         @Semantics.text: true
         @EndUserText.label: 'Satates Description'
         retpa_txt as WrntySupplierReturnPartsText,
         _Language,
         _ReturnSts
}
```
