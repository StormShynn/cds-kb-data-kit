---
name: I_WRNTYCLAIMITEMTYPECATALOG
description: Wrntyclaimitemtypecatalog
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
  - item-level
  - component:LO-WTY-FIO
  - lob:Logistics General
---
# I_WRNTYCLAIMITEMTYPECATALOG

**Wrntyclaimitemtypecatalog**

| Property | Value |
|---|---|
| App Component | `LO-WTY-FIO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WrntyCatalogCode` | ✓ | |  | `j_3gtplkz` |  |  |
| `WrntyNumberInCatalog` | ✓ | |  | `j_3gkatnrc` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_WrntyClaimItemTypeCatalogTxt` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warranty Item Type Catalog'
@ObjectModel:{
//    representativeKey: 'WrntyCatalogCode',//Commenting out due to ATC error '@ObjectModel.foreignKey.association missing'--JJ
    usageType:{
        dataClass       : #ORGANIZATIONAL,
        serviceQuality  : #A,
        sizeCategory    : #S
        },
    supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                            #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE] 
}
@ObjectModel.sapObjectNodeType.name : 'WarrantyClaim'
@VDM.viewType: #BASIC
//@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Feature: 'LO_WTY_CLAIM_MANAGEMENT'
@Metadata.ignorePropagatedAnnotations: true
@Analytics:{ dataExtraction.enabled: true,
             internalName:#LOCAL }
@Analytics.technicalName: 'IWRNTYITEMTPCTLG'         
define view entity I_WrntyClaimItemTypeCatalog
  as select from j_3gkatal
  association [1..*] to I_WrntyClaimItemTypeCatalogTxt as _Text on $projection.WrntyCatalogCode = _Text.WrntyCatalogCode
{
  key   j_3gtplkz  as WrntyCatalogCode,
  key   j_3gkatnrc as WrntyNumberInCatalog,
        _Text
}
```
