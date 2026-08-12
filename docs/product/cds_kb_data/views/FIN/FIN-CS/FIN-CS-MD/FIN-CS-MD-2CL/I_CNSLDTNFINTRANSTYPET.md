---
name: I_CNSLDTNFINTRANSTYPET
description: "Cnsldtnfintranstypet"
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
# I_CNSLDTNFINTRANSTYPET

**Cnsldtnfintranstypet**

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
| `Language` | ✓ | | `_Source` | `Language` |  |  |
| `FinancialTransactionType` | ✓ | |  | `cast( _Source.FinancialTransactionType as fincs_financialtransactiontype preserving type )` |  |  |
| `AdditionalMasterDataSource` |  | |  | `cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type )` |  |  |
| `AdditionalMasterDataText` |  | |  | `cast ( _Source.FinancialTransactionTypeName as fincs_description_text_20 preserving type )` |  |  |
| `FinancialTransactionTypeName` |  | |  | `cast( _Source.FinancialTransactionTypeName as fincs_financialtranstype_desc preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Source` | `CnsldtnIsAdditionalMasterData` |  |  |
| `_Language` | | ✓ | | | | |
| `_FinTransType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_FinTransType` | `I_CnsldtnFinTransType` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICSFINTRANSTYPET'
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #MANDATORY
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #S },
  representativeKey: 'FinancialTransactionType',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnFinTransactionTypeText'                        
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Cmbnd Fin Transaction Type - Txt'
define view I_CnsldtnFinTransTypeT
  as select distinct from P_CnsldtnFinTransTypeT as _Source

    inner join            I_CnsldtnFinTransType  as _Main on  _Main.FinancialTransactionType      = _Source.FinancialTransactionType
                                                          and _Main.CnsldtnIsAdditionalMasterData = _Source.CnsldtnIsAdditionalMasterData

  association [1..1] to I_Language            as _Language     on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnFinTransType as _FinTransType on $projection.FinancialTransactionType = _FinTransType.FinancialTransactionType

{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key _Source.Language,

      @ObjectModel.foreignKey.association: '_FinTransType'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnFinTransTypeVH',
          element: 'FinancialTransactionType'
        }
      }]
  key cast( _Source.FinancialTransactionType as fincs_financialtransactiontype preserving type )    as FinancialTransactionType,

      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type )          as AdditionalMasterDataSource,

      @Semantics.text
      @API.element: {releaseState: #DEPRECATED, successor: 'FinancialTransactionTypeName'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'FinancialTransactionTypeName' }
      cast ( _Source.FinancialTransactionTypeName as fincs_description_text_20 preserving type )    as AdditionalMasterDataText,

      @Semantics.text
      cast( _Source.FinancialTransactionTypeName as fincs_financialtranstype_desc preserving type ) as FinancialTransactionTypeName,

      _Source.CnsldtnIsAdditionalMasterData,


      /* associations */
      _Language,
      _FinTransType
}
where
  _Source.Language is not null;
```
