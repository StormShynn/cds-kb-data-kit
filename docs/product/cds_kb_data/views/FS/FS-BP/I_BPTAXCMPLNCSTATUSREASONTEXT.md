---
name: I_BPTAXCMPLNCSTATUSREASONTEXT
description: "Tax Compliance Status Reasons - Text"
app_component: FS-BP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPTAXCMPLNCSTATUSREASONTEXT')/$value
semantic_en: "Tax Compliance Status Reasons - Text"
semantic_vi: "Tax Compliance Status Reasons - Text — CDS view giao diện dựa trên fsbpcc_taxcrsn_t."
keywords:
  - "tax"
  - "compliance"
  - "status"
  - "reasons"
  - "text"
  - "language"
  - "type"
  - "reason"
  - "desc"
tags:
  - FS
  - bo:businesspartner
  - component:FS-BP
  - FS-BP
  - interface-view
---
# I_BPTAXCMPLNCSTATUSREASONTEXT

**Tax Compliance Status Reasons - Text**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPTAXCMPLNCSTATUSREASONTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `BPTaxComplianceStatus` | ✓ | |  | `status` | `CHAR(1)` | Tax Compliance Status |
| `BPTaxComplianceType` | ✓ | |  | `type` | `CHAR(6)` | Tax Compliance Type |
| `BPTaxComplianceStatusReason` | ✓ | |  | `reason` | `CHAR(2)` | Tax Compliance: Reason for Status |
| `BPTxComplianceStatusReasonDesc` |  | |  | `text` | `CHAR(40)` | Tax Compliance: Text for Status Reason |
| `_BPTaxCmplncStatusReason` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPTaxCmplncStatusReason` | `I_BPTaxCmplncStatusReason` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPTAXCMPLNCSTATUSREASONTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPTAXCMPLNCSTATUSREASONTEXT')/$value)*

```abap
@AbapCatalog: { sqlViewName: 'IBPTXCMPLNCSRTXT',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { representativeKey: 'BPTaxComplianceStatusReason',
                dataCategory: #TEXT,
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
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Tax Compliance Status Reasons - Text'
define view I_BPTaxCmplncStatusReasonText
  as select from fsbpcc_taxcrsn_t
  association [0..1] to I_BPTaxCmplncStatusReason as _BPTaxCmplncStatusReason on  $projection.BPTaxComplianceStatus       = _BPTaxCmplncStatusReason.BPTaxComplianceStatus
                                                                              and $projection.BPTaxComplianceType         = _BPTaxCmplncStatusReason.BPTaxComplianceType
                                                                              and $projection.BPTaxComplianceStatusReason = _BPTaxCmplncStatusReason.BPTaxComplianceStatusReason
  association [0..1] to I_Language                as _Language                on  $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key fsbpcc_taxcrsn_t.spras  as Language,
  key fsbpcc_taxcrsn_t.status as BPTaxComplianceStatus,
  key fsbpcc_taxcrsn_t.type   as BPTaxComplianceType,
  key fsbpcc_taxcrsn_t.reason as BPTaxComplianceStatusReason,

      @Semantics.text: true
      fsbpcc_taxcrsn_t.text   as BPTxComplianceStatusReasonDesc,

      _BPTaxCmplncStatusReason,
      _Language
}
```
