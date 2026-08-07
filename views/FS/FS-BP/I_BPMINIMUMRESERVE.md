---
name: I_BPMINIMUMRESERVE
description: Bpminimumreserve
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
# I_BPMINIMUMRESERVE

**Bpminimumreserve**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BPMinimumReserve` | ✓ | |  | `cast ( dd07l.domvalue_l as bnk_min_rsv )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPMinimumReserveText` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPMINRESERVE',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                representativeKey: 'BPMinimumReserve',
                dataCategory: #VALUE_HELP,
                sapObjectNodeType.name: 'BPMinimumReserveCode',
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
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel.resultSet.sizeCategory: #XS
@Search.searchable: true
@EndUserText.label: 'Subject to min reserve indicator'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */

define view I_BPMinimumReserve
  as select from dd07l
  association [0..*] to I_BPMinimumReserveText as _Text on $projection.BPMinimumReserve = _Text.BPMinimumReserve
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key cast ( dd07l.domvalue_l as bnk_min_rsv ) as BPMinimumReserve,
      _Text
}
where
      dd07l.domname  = 'BNK_MIN_RSV'
  and dd07l.as4local = 'A'
```
