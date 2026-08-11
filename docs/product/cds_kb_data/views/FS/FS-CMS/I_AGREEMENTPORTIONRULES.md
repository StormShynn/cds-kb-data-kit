---
name: I_AGREEMENTPORTIONRULES
description: "Agreement Rule Details"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTIONRULES')/$value
semantic_en: "Agreement Rule Details"
semantic_vi: "Agreement Rule Details — CDS view giao diện dựa trên cms_cag_rules."
keywords:
  - "agreement"
  - "rule"
  - "details"
  - "portion"
  - "rules"
  - "partner"
  - "func"
  - "currency"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGREEMENTPORTIONRULES

**Agreement Rule Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTIONRULES')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgreementPortionRulesUUID` | ✓ | |  | `cag_rules_guid` | `RAW(16)` | GUID for Table CMS_CAG_RULES |
| `AgreementPortionUUID` |  | |  | `cag_por_guid` | `RAW(16)` | GUID for Table CMS_CAG_POR |
| `AgreementPortionRulesPartnerID` |  | |  | `cast( bu_partnerid as cms_dte_bpid_vdm preserving type )` | `CHAR(32)` | Business Partner ID |
| `AgreementPortionRulesBPFunc` |  | |  | `bpf` | `CHAR(6)` | Business Partner Function |
| `AgreementPortionRulesCurrency` |  | |  | `rbl_curr` | `CUKY(5)` | Currency of the Receivable  Amounts Specified in the Link |
| `AgreementPortionRulesOrgUnit` |  | |  | `rbl_org_unit` | `CHAR(10)` | Organization Unit for a Receivable |
| `AgreementPortionRulesProdSet` |  | |  | `product_set` | `CHAR(6)` | Identification of a Product Set |
| `AgreementPortionRulesRemarkTxt` |  | |  | `remarks` | `CHAR(60)` | Text for remarks |
| `AgreementPortionRulesLender` |  | |  | `cast( bu_partnerid1 as cms_dte_bpid_vdm preserving type )` | `CHAR(32)` | Business Partner ID |
| `_AgreementPortion` | | ✓ | | | | |
| `_AgreementPartner` | | ✓ | | | | |
| `_AgreementSpecialArrangement` | | ✓ | | | | |
| `_AgreementReceivableLinkData` | | ✓ | | | | |
| `_AgreementPortionCalcData` | | ✓ | | | | |
| `_AgreementReceivableCalcData` | | ✓ | | | | |
| `_AgreementPortionRulesBPFunc` | | ✓ | | | | |
| `_AgreementPortionRulesCurrency` | | ✓ | | | | |
| `_AgreementPortionRulesOrgUnit` | | ✓ | | | | |
| `_AgreementPortionRulesProdSet` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AgreementPortion` | `I_AgreementPortion` | [0..1] |
| `_AgreementPartner` | `I_AgreementPartner` | [0..*] |
| `_AgreementSpecialArrangement` | `I_AgreementSpecialArrangement` | [0..*] |
| `_AgreementReceivableLinkData` | `I_AgreementReceivableLinkData` | [0..*] |
| `_AgreementPortionCalcData` | `I_AgreementPortionCalcData` | [0..*] |
| `_AgreementReceivableCalcData` | `I_AgreementReceivableCalcData` | [0..*] |
| `_AgreementPortionRulesBPFunc` | `I_CollateralPartnerFunction` | [0..1] |
| `_AgreementPortionRulesCurrency` | `I_Currency` | [0..1] |
| `_AgreementPortionRulesOrgUnit` | `I_CollateralRblOrgUnit` | [0..1] |
| `_AgreementPortionRulesProdSet` | `I_AgreementRuleProductSet` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTIONRULES')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTIONRULES')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICAGPORRULES',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl:{
    authorizationCheck: #CHECK,
    personalData:{
        blocking: #BLOCKED_DATA_EXCLUDED
    }
}
@ObjectModel:{
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'L',
        dataClass: 'MASTER'
    },
    supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'AgreementPortionRulesUUID'
}
@Metadata:{
    ignorePropagatedAnnotations: true,
    allowExtensions: true
}
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            automatic: true
    }
  }
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement Rule Details'
define view I_AgreementPortionRules
  as select from cms_cag_rules
  association [0..1] to I_AgreementPortion            as _AgreementPortion              on $projection.AgreementPortionUUID = _AgreementPortion.AgreementPortionUUID
  association [0..*] to I_AgreementPartner            as _AgreementPartner              on $projection.AgreementPortionUUID = _AgreementPartner.AgreementPortionUUID
  association [0..*] to I_AgreementSpecialArrangement as _AgreementSpecialArrangement   on $projection.AgreementPortionUUID = _AgreementSpecialArrangement.AgrmtSpecialArrangementRefUUID
  association [0..*] to I_AgreementReceivableLinkData as _AgreementReceivableLinkData   on $projection.AgreementPortionUUID = _AgreementReceivableLinkData.AgreementPortionUUID
  association [0..*] to I_AgreementPortionCalcData    as _AgreementPortionCalcData      on $projection.AgreementPortionUUID = _AgreementPortionCalcData.AgreementPortionUUID
  association [0..*] to I_AgreementReceivableCalcData as _AgreementReceivableCalcData   on $projection.AgreementPortionUUID = _AgreementReceivableCalcData.AgreementPortionUUID
  association [0..1] to I_CollateralPartnerFunction   as _AgreementPortionRulesBPFunc   on $projection.AgreementPortionRulesBPFunc = _AgreementPortionRulesBPFunc.CollateralPartnerFunction
  association [0..1] to I_Currency                    as _AgreementPortionRulesCurrency on $projection.AgreementPortionRulesCurrency = _AgreementPortionRulesCurrency.Currency
  association [0..1] to I_CollateralRblOrgUnit        as _AgreementPortionRulesOrgUnit  on $projection.AgreementPortionRulesOrgUnit = _AgreementPortionRulesOrgUnit.CollateralRblOrganizationUnit
  association [0..1] to I_AgreementRuleProductSet     as _AgreementPortionRulesProdSet  on $projection.AgreementPortionRulesProdSet = _AgreementPortionRulesProdSet.AgreementPortionRulesProdSet
{
  key cag_rules_guid                                            as AgreementPortionRulesUUID,
      cag_por_guid                                              as AgreementPortionUUID,
      cast( bu_partnerid as cms_dte_bpid_vdm preserving type )  as AgreementPortionRulesPartnerID,
      @ObjectModel.foreignKey.association: '_AgreementPortionRulesBPFunc'
      bpf                                                       as AgreementPortionRulesBPFunc,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_AgreementPortionRulesCurrency'
      rbl_curr                                                  as AgreementPortionRulesCurrency,
      @ObjectModel.foreignKey.association: '_AgreementPortionRulesOrgUnit'
      rbl_org_unit                                              as AgreementPortionRulesOrgUnit,
      @ObjectModel.foreignKey.association: '_AgreementPortionRulesProdSet'
      product_set                                               as AgreementPortionRulesProdSet,
      remarks                                                   as AgreementPortionRulesRemarkTxt,
      cast( bu_partnerid1 as cms_dte_bpid_vdm preserving type ) as AgreementPortionRulesLender,

      _AgreementPortion,
      _AgreementPartner,
      _AgreementSpecialArrangement,
      _AgreementReceivableLinkData,
      _AgreementPortionCalcData,
      _AgreementReceivableCalcData,
      _AgreementPortionRulesBPFunc,
      _AgreementPortionRulesCurrency,
      _AgreementPortionRulesOrgUnit,
      _AgreementPortionRulesProdSet
}
```
