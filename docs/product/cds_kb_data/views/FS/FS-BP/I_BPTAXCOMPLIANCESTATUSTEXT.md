---
name: I_BPTAXCOMPLIANCESTATUSTEXT
description: "Tax Compliance Status of BP - Text"
app_component: FS-BP
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPTAXCOMPLIANCESTATUSTEXT')/$value
semantic_en: "Tax Compliance Status of BP - Text"
semantic_vi: "Tax Compliance Status of BP - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "tax"
  - "compliance"
  - "status"
  - "text"
  - "language"
  - "desc"
tags:
  - FS
  - bo:businesspartner
  - component:FS-BP
  - FS-BP
  - interface-view
---
# I_BPTAXCOMPLIANCESTATUSTEXT

**Tax Compliance Status of BP - Text**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPTAXCOMPLIANCESTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `BPTaxComplianceStatus` | ✓ | |  | `cast ( dd07t.domvalue_l as fsbp_taxc_status )` | `CHAR(1)` | Tax Compliance Status |
| `BPTaxComplianceStatusDesc` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_BPTaxComplianceStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPTaxComplianceStatus` | `I_BPTaxComplianceStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPTAXCOMPLIANCESTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPTAXCOMPLIANCESTATUSTEXT')/$value)*

```abap
@AbapCatalog: { sqlViewName: 'IBPTAXCMPLNCSTTX',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'BPTaxComplianceStatus',
                usageType: { dataClass: #CUSTOMIZING,
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
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Tax Compliance Status of BP - Text'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_BPTaxComplianceStatusText
  as select from dd07t
  association [0..1] to I_BPTaxComplianceStatus as _BPTaxComplianceStatus on $projection.BPTaxComplianceStatus = _BPTaxComplianceStatus.BPTaxComplianceStatus
  association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key dd07t.ddlanguage                              as Language,

      @ObjectModel.text.element: ['BPTaxComplianceStatusDesc']
      @ObjectModel.foreignKey.association: '_BPTaxComplianceStatus'
  key cast ( dd07t.domvalue_l as fsbp_taxc_status ) as BPTaxComplianceStatus,
      @Semantics.text: true
      dd07t.ddtext                                  as BPTaxComplianceStatusDesc,

      _BPTaxComplianceStatus,
      _Language
}
where
      dd07t.domname  = 'FSBP_TAXC_STATUS'
  and dd07t.as4local = 'A'
```
