---
name: I_BPGERASTRGLNRSTRCDASTQTA
description: "Bpgerastrglnrstrcdastqta"
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
# I_BPGERASTRGLNRSTRCDASTQTA

**Bpgerastrglnrstrcdastqta**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BPGerAstRglnRestrictedAstQuota` | ✓ | |  | `cast ( dd07l.domvalue_l as bp_entity_quota )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPGerAstRglnRstrcdAstQtaText` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPGERASTRGLN',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #M
                           },
                representativeKey: 'BPGerAstRglnRestrictedAstQuota',
                dataCategory: #VALUE_HELP,
                sapObjectNodeType.name: 'DE_BPAstRglnRstrcdAstQuotaCode',
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
@Search.searchable: true
@EndUserText.label: 'BP Asset Regulation'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_BPGerAstRglnRstrcdAstQta as select from dd07l
association [0..*] to I_BPGerAstRglnRstrcdAstQtaText as _Text on $projection.BPGerAstRglnRestrictedAstQuota = _Text.BPGerAstRglnRestrictedAstQuota
{  
   @Search.defaultSearchElement: true
   @Search.ranking: #HIGH
   @ObjectModel.text.association: '_Text'
  key cast ( dd07l.domvalue_l as bp_entity_quota ) as BPGerAstRglnRestrictedAstQuota,
      _Text
}
where
      dd07l.domname  = 'BP_ENTITY_QUOTA'
  and dd07l.as4local = 'A'
```
