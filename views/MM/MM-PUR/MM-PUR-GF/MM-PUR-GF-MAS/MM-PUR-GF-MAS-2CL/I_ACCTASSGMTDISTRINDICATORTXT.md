---
name: I_ACCTASSGMTDISTRINDICATORTXT
description: "Acctassgmtdistrindicatortxt"
app_component: MM-PUR-GF-MAS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-GF
  - interface-view
  - component:MM-PUR-GF-MAS-2CL
  - lob:Sourcing & Procurement
---
# I_ACCTASSGMTDISTRINDICATORTXT

**Acctassgmtdistrindicatortxt**

| Property | Value |
|---|---|
| App Component | `MM-PUR-GF-MAS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `MultipleAcctAssgmtDistribution` | ✓ | |  | `domvalue_l` |  |  |
| `DistributionKeyText` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |
| `_DistributionInd` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IAADISTRINDTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Distribution Indicator - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'MultipleAcctAssgmtDistribution'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #LANGUAGE_DEPENDENT_TEXT ]
define view I_AcctAssgmtDistrIndicatorTxt
  as select from dd07t

  association        to parent I_AcctAssgmtDistrIndicator as _DistributionInd on $projection.MultipleAcctAssgmtDistribution = _DistributionInd.MultipleAcctAssgmtDistribution

  association [0..1] to I_Language                        as _Language        on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage as Language,

      @ObjectModel.foreignKey.association: '_DistributionInd'
      @ObjectModel.text.element: ['DistributionKeyText']
  key dd07t.domvalue_l as MultipleAcctAssgmtDistribution,

      @Semantics.text: true
      dd07t.ddtext     as DistributionKeyText,

      _DistributionInd,
      _Language
}
where
      dd07t.domname    = 'VRTKZ'
  and dd07t.as4local   = 'A'
  and dd07t.as4vers    = '0000'
  and dd07t.ddlanguage = $session.system_language
```
