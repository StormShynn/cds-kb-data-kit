---
name: I_BPTXCMPLNCTYPECNTRYRGNASSGMT
description: Bptxcmplnctypecntryrgnassgmt
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
# I_BPTXCMPLNCTYPECNTRYRGNASSGMT

**Bptxcmplnctypecntryrgnassgmt**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BPTaxComplianceType` | ✓ | |  | `type` |
| `BPTaxComplianceCountryRegion` | ✓ | |  | `country` |
| `BPTaxComplianceRegion` | ✓ | |  | `region` |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Tx Cmplnc Type Assgmt Cntry/Rgn'
@AbapCatalog.viewEnhancementCategory: [#NONE]
@ObjectModel: { representativeKey: 'BPTaxComplianceType',
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
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
define view entity I_BPTxCmplncTypeCntryRgnAssgmt
  as select from fsbpcc_taxc2ctry
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      /* start suppress warning shlporigin_not_inherited */
  key type    as BPTaxComplianceType,
  key country as BPTaxComplianceCountryRegion,
  key region  as BPTaxComplianceRegion
      /* end suppress warning shlporigin_not_inherited */
}
```
