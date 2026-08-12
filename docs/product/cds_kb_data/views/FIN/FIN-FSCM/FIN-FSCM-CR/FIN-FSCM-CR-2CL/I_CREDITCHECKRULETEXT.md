---
name: I_CREDITCHECKRULETEXT
description: "Credit Check Rule - Text"
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITCHECKRULETEXT')/$value
semantic_en: "Credit Check Rule - Text"
semantic_vi: "Credit Check Rule - Text — CDS view giao diện dựa trên ukm_chck_rule0t."
keywords:
  - "credit"
  - "check"
  - "rule"
  - "text"
  - "language"
  - "name"
tags:
  - FIN
  - component:FIN-FSCM-CR-2CL
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
---
# I_CREDITCHECKRULETEXT

**Credit Check Rule - Text**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITCHECKRULETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `CreditCheckRule` | ✓ | |  | `check_rule` | `CHAR(10)` | Rule for Credit Check |
| `CreditCheckRuleName` |  | |  | `check_rule_txt` | `CHAR(50)` | Name of Check Rule |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITCHECKRULETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITCHECKRULETEXT')/$value)*

```abap
@EndUserText.label: 'Credit Check Rule - Text'
//@Analytics: { dataExtraction.enabled: true }
@AbapCatalog.sqlViewName: 'ICRDTCHCKRULETXT'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@VDM.viewType: #BASIC
//@VDM.private: false
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CreditCheckRule'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
@Search: { searchable: true }
define view I_CreditCheckRuleText
  as select from ukm_chck_rule0t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu          as Language,
  key check_rule     as CreditCheckRule,
      @Semantics.text: true
      @Search: { defaultSearchElement: true,
           fuzzinessThreshold:   0.8,
           ranking:              #LOW }
      check_rule_txt as CreditCheckRuleName,
      _Language
};
```
