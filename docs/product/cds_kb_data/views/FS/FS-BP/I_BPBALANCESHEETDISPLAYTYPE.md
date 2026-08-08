---
name: I_BPBALANCESHEETDISPLAYTYPE
description: "Bpbalancesheetdisplaytype"
app_component: FS-BP
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FS
  - FS-BP
  - interface-view
  - component:FS-BP
  - lob:Other
---
# I_BPBALANCESHEETDISPLAYTYPE

**Bpbalancesheetdisplaytype**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BPBalanceSheetDisplayType` | ✓ | |  | `cast ( dd07l.domvalue_l as bp_bal_flg )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPBalSheetDisplayTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Balance Sheet Display for BP'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                representativeKey: 'BPBalanceSheetDisplayType',
                sapObjectNodeType.name: 'BPBalanceSheetDisplayTypeCode',
                supportedCapabilities: [  #ANALYTICAL_DIMENSION,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #SQL_DATA_SOURCE,
                                          #EXTRACTION_DATA_SOURCE,
                                          #VALUE_HELP_PROVIDER,
                                          #SEARCHABLE_ENTITY  ],
                modelingPattern: #ANALYTICAL_DIMENSION  
              }
@Analytics: { dataExtraction.enabled: true,
              dataCategory: #DIMENSION,
              internalName: #LOCAL 
            }                       
@VDM.viewType: #BASIC
@Search.searchable: true
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_BPBalanceSheetDisplayType as select from dd07l
association [0..*] to I_BPBalSheetDisplayTypeText as _Text on $projection.BPBalanceSheetDisplayType = _Text.BPBalanceSheetDisplayType
{
  
 @Search.defaultSearchElement: true
 @Search.ranking: #HIGH
 @ObjectModel.text.association: '_Text'
  key cast ( dd07l.domvalue_l as bp_bal_flg ) as BPBalanceSheetDisplayType,
  _Text
  
}

where
      dd07l.domname  = 'BP_BAL_FLG'
  and dd07l.as4local = 'A'
```
