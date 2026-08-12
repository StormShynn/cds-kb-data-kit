---
name: I_CNSLDTNCRCYCNVRSNDIFFTYPET_2
description: "Cnsldtncrcycnvrsndifftypet 2"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNCRCYCNVRSNDIFFTYPET_2

**Cnsldtncrcycnvrsndifftypet 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(_DomainText.Language as spras preserving type )` |  |  |
| `CurrencyConversionsDiffType` | ✓ | |  | `cast(left(_DomainText.DomainValue, 1) as fincs_currencycnvrsnsdifftype)` |  |  |
| `CurrencyConversionsDiffTypeTxt` |  | | `_DomainText` | `DomainValueText` |  |  |
| `DomainValue` |  | | `_DomainText` | `DomainValue` |  |  |
| `_CrcyCnvrsnDiffType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CrcyCnvrsnDiffType` | `I_CnsldtnCrcyCnvrsnDiffType` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCRTFLGT2',
  compiler.compareFilter: true,
  preserveKey: true
  }
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    usageType: {
        dataClass: #CUSTOMIZING,
        serviceQuality: #A,
        sizeCategory: #S
    },
  dataCategory: #TEXT,
  representativeKey: 'CurrencyConversionsDiffType',
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Currency Cnvrsns Difference Type - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnCrcyCnvrsnDiffTypeT_2
  as select from P_CnsldtnDomainText(P_DomainName : 'FC_RTFLG') as _DomainText

  association [1..1] to I_CnsldtnCrcyCnvrsnDiffType as _CrcyCnvrsnDiffType on $projection.CurrencyConversionsDiffType = _CrcyCnvrsnDiffType.CurrencyConversionsDiffType

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast(_DomainText.Language as spras preserving type )                    as Language,

      @ObjectModel.foreignKey.association: '_CrcyCnvrsnDiffType'
  key cast(left(_DomainText.DomainValue, 1) as fincs_currencycnvrsnsdifftype) as CurrencyConversionsDiffType,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.8
      }
      _DomainText.DomainValueText                                             as CurrencyConversionsDiffTypeTxt,

      @Analytics.hidden: true
      @Consumption.hidden: true
      _DomainText.DomainValue                                                 as DomainValue, // required for optimized join definitions


      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _CrcyCnvrsnDiffType,
      _DomainText._Language
};
```
