---
name: I_BPTAXCMPLNCSTATUSREASON
description: "Tax Compliance Status Reasons"
app_component: FS-BP
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPTAXCMPLNCSTATUSREASON')/$value
semantic_en: "Tax Compliance Status Reasons"
semantic_vi: "Tax Compliance Status Reasons — CDS view giao diện dựa trên fsbpcc_taxcrsn."
keywords:
  - "tax"
  - "compliance"
  - "status"
  - "reasons"
  - "type"
  - "reason"
tags:
  - FS
  - bo:businesspartner
  - component:FS-BP
  - FS-BP
  - interface-view
---
# I_BPTAXCMPLNCSTATUSREASON

**Tax Compliance Status Reasons**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPTAXCMPLNCSTATUSREASON')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BPTaxComplianceType` | ✓ | |  | `type` | `CHAR(6)` | Tax Compliance Type |
| `BPTaxComplianceStatus` | ✓ | |  | `status` | `CHAR(1)` | Tax Compliance Status |
| `BPTaxComplianceStatusReason` | ✓ | |  | `reason` | `CHAR(2)` | Tax Compliance: Reason for Status |
| `_Text` | | ✓ | | | | |
| `_BPTaxCompliance` | | ✓ | | | | |
| `_BPTaxComplianceType` | | ✓ | | | | |
| `_BPTaxComplianceStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPTaxCmplncStatusReasonText` | [0..*] |
| `_BPTaxCompliance` | `I_BPTaxCompliance` | [0..*] |
| `_BPTaxComplianceType` | `I_BPTaxComplianceType` | [0..1] |
| `_BPTaxComplianceStatus` | `I_BPTaxComplianceStatus` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPTAXCMPLNCSTATUSREASON')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPTAXCMPLNCSTATUSREASON')/$value)*

```abap
@AbapCatalog: { sqlViewName: 'IBPTXCMPLNCSR',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { representativeKey: 'BPTaxComplianceStatusReason',
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                sapObjectNodeType.name: 'BPTxComplianceStatusReasonCode',            
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
@EndUserText.label: 'Tax Compliance Status Reasons'
define view I_BPTaxCmplncStatusReason
  as select from fsbpcc_taxcrsn
  association [0..*] to I_BPTaxCmplncStatusReasonText as _Text on $projection.BPTaxComplianceType = _Text.BPTaxComplianceType
                                                               and $projection.BPTaxComplianceStatus = _Text.BPTaxComplianceStatus
                                                               and $projection.BPTaxComplianceStatusReason = _Text.BPTaxComplianceStatusReason
  association [0..*] to I_BPTaxCompliance as _BPTaxCompliance on $projection.BPTaxComplianceType = _BPTaxCompliance.BPTaxComplianceType
                                                               and $projection.BPTaxComplianceStatus = _BPTaxCompliance.BPTaxComplianceStatus
                                                               and $projection.BPTaxComplianceStatusReason = _BPTaxCompliance.BPTaxComplianceStatusReason
  association [0..1] to I_BPTaxComplianceType as _BPTaxComplianceType on $projection.BPTaxComplianceType = _BPTaxComplianceType.BPTaxComplianceType       
  association [0..1] to I_BPTaxComplianceStatus as _BPTaxComplianceStatus on $projection.BPTaxComplianceStatus = _BPTaxComplianceStatus.BPTaxComplianceStatus                                                                                                 
{
  @ObjectModel.foreignKey.association: '_BPTaxComplianceType'
  key fsbpcc_taxcrsn.type   as BPTaxComplianceType,
  @ObjectModel.foreignKey.association: '_BPTaxComplianceStatus'
  key fsbpcc_taxcrsn.status as BPTaxComplianceStatus,
  @ObjectModel.text.association: '_Text'
  key fsbpcc_taxcrsn.reason as BPTaxComplianceStatusReason,

      _Text,
      _BPTaxCompliance,
      _BPTaxComplianceType,
      _BPTaxComplianceStatus
}
```
