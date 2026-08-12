---
name: I_BPTAXCOMPLIANCESTATUS
description: "Tax Compliance Status of BP"
app_component: FS-BP
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPTAXCOMPLIANCESTATUS')/$value
semantic_en: "Tax Compliance Status of BP"
semantic_vi: "Tax Compliance Status of BP — CDS view giao diện dựa trên dd07l."
keywords:
  - "tax"
  - "compliance"
  - "status"
tags:
  - FS
  - bo:businesspartner
  - component:FS-BP
  - FS-BP
  - interface-view
---
# I_BPTAXCOMPLIANCESTATUS

**Tax Compliance Status of BP**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPTAXCOMPLIANCESTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BPTaxComplianceStatus` | ✓ | |  | `cast ( dd07l.domvalue_l as fsbp_taxc_status )` | `CHAR(1)` | Tax Compliance Status |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPTaxComplianceStatusText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPTAXCOMPLIANCESTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPTAXCOMPLIANCESTATUS')/$value)*

```abap
@AbapCatalog: { sqlViewName: 'IBPTAXCMPLNCSTAT',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { representativeKey: 'BPTaxComplianceStatus',
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                sapObjectNodeType.name: 'BPTaxComplianceStatusCode',
                supportedCapabilities: [  #ANALYTICAL_DIMENSION,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #SQL_DATA_SOURCE,
                                          #EXTRACTION_DATA_SOURCE,
                                          #VALUE_HELP_PROVIDER,
                                          #SEARCHABLE_ENTITY  ]
              } 
@Analytics: { dataExtraction.enabled: true,
              dataCategory: #DIMENSION,
              internalName: #LOCAL 
            }                   
@Metadata.ignorePropagatedAnnotations: true               
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@EndUserText.label: 'Tax Compliance Status of BP'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_BPTaxComplianceStatus as select from dd07l

  association [0..*] to I_BPTaxComplianceStatusText as _Text on $projection.BPTaxComplianceStatus = _Text.BPTaxComplianceStatus
{
 @ObjectModel.text.association: '_Text'
  key cast ( dd07l.domvalue_l as fsbp_taxc_status ) as BPTaxComplianceStatus,
      _Text
}
where
      dd07l.domname  = 'FSBP_TAXC_STATUS'
  and dd07l.as4local = 'A'
```
