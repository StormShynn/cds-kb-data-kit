---
name: I_BPEMPLOYEEGROUPTEXT
description: Bpemployeegrouptext
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
  - text-view
  - text
  - component:FS-BP
  - lob:Other
---
# I_BPEMPLOYEEGROUPTEXT

**Bpemployeegrouptext**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast(tp05t.langu as langu preserving type)` |
| key `BusinessPartnerEmployeeGroup` | `cast(tp05t.staff_grp as bp_staff_g preserving type)` |
| `BPEmployeeGroupDescription` | `tp05t.staff_gr_t` |
| `_BusinessPartnerEmployeeGroup` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartnerEmployeeGroup` | `I_BusinessPartnerEmployeeGroup` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'BP: Employee Group - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'BusinessPartnerEmployeeGroup',
                usageType : { dataClass: #CUSTOMIZING,
                              serviceQuality: #A,
                              sizeCategory: #S
                            },
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [  #LANGUAGE_DEPENDENT_TEXT,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #SQL_DATA_SOURCE,
                                          #EXTRACTION_DATA_SOURCE,
                                          #SEARCHABLE_ENTITY  ]
              }
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@Search.searchable: true

define view entity I_BPEmployeeGroupText
  as select from tp05t
  association [0..1] to I_BusinessPartnerEmployeeGroup as _BusinessPartnerEmployeeGroup on $projection.BusinessPartnerEmployeeGroup = _BusinessPartnerEmployeeGroup.BusinessPartnerEmployeeGroup
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast(tp05t.langu as langu preserving type)               as Language,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.foreignKey.association: '_BusinessPartnerEmployeeGroup'
  key cast(tp05t.staff_grp as bp_staff_g preserving type)  as BusinessPartnerEmployeeGroup,

      @Semantics.text: true
      tp05t.staff_gr_t                                     as BPEmployeeGroupDescription,

      _BusinessPartnerEmployeeGroup,
      _Language
}
```
