---
name: I_BILLINGPLANRULETEXT
description: "Billingplanruletext"
app_component: SD-BIL-IV-BP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-IV
  - interface-view
  - text-view
  - billing
  - text
  - component:SD-BIL-IV-BP-2CL
  - lob:Sales & Distribution
---
# I_BILLINGPLANRULETEXT

**Billingplanruletext**

| Property | Value |
|---|---|
| App Component | `SD-BIL-IV-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingPlanRule` | ✓ | |  | `SUBSTRING(domvalue_l, 1, 1)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `BillingPlanRuleName` |  | |  | `ddtext` |  |  |
| `_BillingPlanRule` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillingPlanRule` | `I_BillingPlanRule` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'BillingPlanRule'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT,
                                      #EXTRACTION_DATA_SOURCE ]
@EndUserText.label: 'Billing Plan Rule - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDBILLPLANRULET'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_BillingPlanRuleText
as select from dd07t

association[0..1] to I_BillingPlanRule as _BillingPlanRule on $projection.BillingPlanRule = _BillingPlanRule.BillingPlanRule
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.sapObjectNodeTypeReference: 'BillingPlanBillingRule'
    @ObjectModel.foreignKey.association: '_BillingPlanRule'
    key SUBSTRING(domvalue_l, 1, 1) as BillingPlanRule,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key ddlanguage as Language,
    
    @Semantics.text: true
    ddtext as BillingPlanRuleName,
    
    //Associations
    _BillingPlanRule,
    _Language
}
where (dd07t.domname = 'FAREG') and (dd07t.as4local = 'A');
```
