---
name: I_BUSINESSPARTNEREMPLOYEEGROUP
description: "Business PartnerEMPLOYEEGROUP"
app_component: FS-BP
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FS
  - FS-BP
  - interface-view
  - business-partner
  - partner
  - component:FS-BP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNEREMPLOYEEGROUP

**Business PartnerEMPLOYEEGROUP**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartnerEmployeeGroup` | ✓ | |  | `staff_grp` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPEmployeeGroupText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'BP: Employee Group'
@AbapCatalog.viewEnhancementCategory: [#NONE]
@ObjectModel: { representativeKey: 'BusinessPartnerEmployeeGroup',
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                sapObjectNodeType.name: 'BPEmployeeGroupCode',
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
@Metadata: { allowExtensions: true,
             ignorePropagatedAnnotations: true
           }
@VDM.viewType: #BASIC
@Search.searchable: true

define view entity I_BusinessPartnerEmployeeGroup
  as select from tp05
  association [0..*] to I_BPEmployeeGroupText as _Text on $projection.BusinessPartnerEmployeeGroup = _Text.BusinessPartnerEmployeeGroup
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key tp05.staff_grp as BusinessPartnerEmployeeGroup,
      _Text
}
```
