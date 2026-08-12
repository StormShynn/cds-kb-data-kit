---
name: I_WRNTYCLAIMITEMTYPECATALOGTXT
description: "Wrntyclaimitemtypecatalogtxt"
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
  - item-level
  - component:LO-WTY-FIO
  - lob:Logistics General
---
# I_WRNTYCLAIMITEMTYPECATALOGTXT

**Wrntyclaimitemtypecatalogtxt**

| Property | Value |
|---|---|
| App Component | `LO-WTY-FIO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WrntyCatalogCode` | ✓ | |  | `katkz` |  |  |
| `WrntyNumberInCatalog` | ✓ | |  | `katnr` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `WrntyNumberInCatalogText` |  | |  | `ltext` |  |  |
| `_WrntyClaimItemTypeCatalog` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WrntyClaimItemTypeCatalog` | `I_WrntyClaimItemTypeCatalog` | [1..*] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warranty Item Type Catalog - Text'
@ObjectModel:{
//    representativeKey: 'WrntyCatalogCode',//Commenting out due to ATC error '@ObjectModel.foreignKey.association missing'--JJ
    usageType:{
        dataClass       : #ORGANIZATIONAL,
        serviceQuality  : #A,
        sizeCategory    : #S
        },
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                          #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, 
                          #EXTRACTION_DATA_SOURCE]  }
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IWRNTYITMTCLGTXT'
@VDM.viewType: #BASIC //*******Modernization Task********
//@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Feature: 'LO_WTY_CLAIM_MANAGEMENT'
@Metadata.ignorePropagatedAnnotations: true
@Analytics:{ dataExtraction.enabled: true,
             internalName:#LOCAL }
/*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ]  } */
define view entity I_WrntyClaimItemTypeCatalogTxt
  as select from /sapcem/kattext
  association [1..*] to I_WrntyClaimItemTypeCatalog as _WrntyClaimItemTypeCatalog on $projection.WrntyCatalogCode = _WrntyClaimItemTypeCatalog.WrntyCatalogCode
  association [0..1] to I_Language                  as _Language                  on $projection.Language = _Language.Language
{
  key     katkz as WrntyCatalogCode,
  key     katnr as WrntyNumberInCatalog,
          @Semantics.language: true
  key     langu as Language,
          @Semantics.text:true
          ltext as WrntyNumberInCatalogText,
          _Language,
          _WrntyClaimItemTypeCatalog

}
```
