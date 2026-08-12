---
name: I_BPLOANTOMANAGER
description: "Bploantomanager"
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
# I_BPLOANTOMANAGER

**Bploantomanager**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartnerLoanToManager` | ✓ | |  | `kwg_org` |  |  |
| `_Text` | | ✓ | | | | |
| `_BPFinancialServicesReporting` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPLoanToManagerText` | [0..*] |
| `_BPFinancialServicesReporting` | `I_BPFinancialServicesReporting` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPLOANTOMGR',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { dataCategory: #VALUE_HELP,
                representativeKey: 'BusinessPartnerLoanToManager',
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                sapObjectNodeType.name: 'DE_BPLoanToManagerCode',
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
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@EndUserText.label: 'Loan to Manager'

define view I_BPLoanToManager
  as select from tp10
  association [0..*] to I_BPLoanToManagerText          as _Text                         on $projection.BusinessPartnerLoanToManager = _Text.BusinessPartnerLoanToManager
  association [0..*] to I_BPFinancialServicesReporting as _BPFinancialServicesReporting on $projection.BusinessPartnerLoanToManager = _BPFinancialServicesReporting.BusinessPartnerLoanToManager
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key tp10.kwg_org as BusinessPartnerLoanToManager,

      _Text,
      _BPFinancialServicesReporting
}
```
