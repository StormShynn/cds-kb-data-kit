---
name: I_BPDEBTORGROUP
description: "Bpdebtorgroup"
app_component: FS-BP
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
atc_state: released
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
# I_BPDEBTORGROUP

**Bpdebtorgroup**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartnerDebtorGroup` | ✓ | |  | `cast ( dd07l.domvalue_l as bp_debtor_group )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPDebtorGroupText` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPDBTRGROUP',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #M
                           },
                representativeKey: 'BusinessPartnerDebtorGroup',
                dataCategory: #VALUE_HELP,
                sapObjectNodeType.name: 'DE_BPDebtorGroupCode',
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
@EndUserText.label: 'Debtor Group'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_BPDebtorGroup
  as select from dd07l
  association [0..*] to I_BPDebtorGroupText as _Text on $projection.BusinessPartnerDebtorGroup = _Text.BusinessPartnerDebtorGroup
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key cast ( dd07l.domvalue_l as bp_debtor_group ) as BusinessPartnerDebtorGroup,
      _Text
}
where
      dd07l.domname  = 'BP_DEBTOR_GROUP'
  and dd07l.as4local = 'A'
```
