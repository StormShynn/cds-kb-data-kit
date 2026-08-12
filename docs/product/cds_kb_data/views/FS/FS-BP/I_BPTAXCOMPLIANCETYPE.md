---
name: I_BPTAXCOMPLIANCETYPE
description: "Tax Compliance Types"
app_component: FS-BP
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPTAXCOMPLIANCETYPE')/$value
semantic_en: "Tax Compliance Types"
semantic_vi: "Tax Compliance Types — CDS view giao diện dựa trên fsbpcc_taxc."
keywords:
  - "tax"
  - "compliance"
  - "types"
  - "type"
tags:
  - FS
  - bo:businesspartner
  - component:FS-BP
  - FS-BP
  - interface-view
---
# I_BPTAXCOMPLIANCETYPE

**Tax Compliance Types**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPTAXCOMPLIANCETYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BPTaxComplianceType` | ✓ | |  | `type` | `CHAR(6)` | Tax Compliance Type |
| `_Text` | | ✓ | | | | |
| `_BPTaxCompliance` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPTaxComplianceTypeText` | [0..*] |
| `_BPTaxCompliance` | `I_BPTaxCompliance` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPTAXCOMPLIANCETYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPTAXCOMPLIANCETYPE')/$value)*

```abap
@AbapCatalog: { sqlViewName: 'IBPTAXCMPLNCT',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { representativeKey: 'BPTaxComplianceType',
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                sapObjectNodeType.name: 'BPTaxComplianceTypeCode',           
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
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Tax Compliance Types'
define view I_BPTaxComplianceType
  as select from fsbpcc_taxc
  association [0..*] to I_BPTaxComplianceTypeText as _Text on $projection.BPTaxComplianceType = _Text.BPTaxComplianceType
  association [0..*] to I_BPTaxCompliance as _BPTaxCompliance on $projection.BPTaxComplianceType = _BPTaxCompliance.BPTaxComplianceType
{
      @ObjectModel.text.association: '_Text'
  key fsbpcc_taxc.type as BPTaxComplianceType,

      _Text,
      _BPTaxCompliance
}
```
