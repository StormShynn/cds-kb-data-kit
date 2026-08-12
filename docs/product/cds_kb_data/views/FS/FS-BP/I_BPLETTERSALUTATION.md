---
name: I_BPLETTERSALUTATION
description: "Bplettersalutation"
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
  - component:FS-BP
  - lob:Other
---
# I_BPLETTERSALUTATION

**Bplettersalutation**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BPLetterSalutation` | ✓ | |  | `title_let` |  |  |
| `BusinessPartnerCategory` |  | |  | `type` |  |  |
| `_Text` | | ✓ | | | | |
| `_BPFinancialServicesExtn` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPLetterSalutationText` | [0..*] |
| `_BPFinancialServicesExtn` | `I_BPFinancialServicesExtn` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPLTRSALUTATION',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { representativeKey: 'BPLetterSalutation',
                dataCategory: #VALUE_HELP,
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                sapObjectNodeType.name: 'BPLetterSalutationCode',
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
             ignorePropagatedAnnotations: true //For C1 Release
           }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@Search.searchable: true
@EndUserText.label: 'Letter Salutation of Business Partner'

define view I_BPLetterSalutation
  as select from tp02
  association [0..*] to I_BPLetterSalutationText  as _Text                    on $projection.BPLetterSalutation = _Text.BPLetterSalutation
  association [0..*] to I_BPFinancialServicesExtn as _BPFinancialServicesExtn on $projection.BPLetterSalutation = _BPFinancialServicesExtn.BPLetterSalutation
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key tp02.title_let as BPLetterSalutation,
      tp02.type as BusinessPartnerCategory,

      _Text,
      _BPFinancialServicesExtn
}
```
