---
name: I_CNSLDTNFSITEMCASHFLOWTEXT
description: "Cnsldtnfsitemcashflowtext"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - text-view
  - text
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFSITEMCASHFLOWTEXT

**Cnsldtnfsitemcashflowtext**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( _FSItemAttribValueTxt.Language as spras preserving type )` |  |  |
| `CnsldtnFSItemCashFlow` | ✓ | |  | `cast( _FSItemAttribValueTxt.CnsldtnFSItemAttributeValue as fincs_fsitemcashflow preserving type )` |  |  |
| `CnsldtnFSItemCashFlowText` |  | |  | `cast( _FSItemAttribValueTxt.CnsldtnFSItemAttribValueText as fincs_short_text_30 preserving type )` |  |  |
| `CnsldtnFSItemCashFlowLongText` |  | |  | `cast( _FSItemAttribValueTxt.CnsldtnFSItemAttribValLongText as fincs_long_text_60 preserving type )` |  |  |
| `_CnsldtnFSItemCashFlow` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnFSItemCashFlow` | `I_CnsldtnFSItemCashFlow` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSFSICFT',
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
    representativeKey: 'CnsldtnFSItemCashFlow',
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'FS Item Cash Flow Selection - Text'

define view I_CnsldtnFSItemCashFlowText
  as select from P_CnsldtnFSItemAttribValueTxt(P_CnsldtnFSItemAttribute : '005') as _FSItemAttribValueTxt

  association [1..1] to I_CnsldtnFSItemCashFlow as _CnsldtnFSItemCashFlow on $projection.CnsldtnFSItemCashFlow = _CnsldtnFSItemCashFlow.CnsldtnFSItemCashFlow
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( _FSItemAttribValueTxt.Language  as spras preserving type )                                   as Language,

  key cast( _FSItemAttribValueTxt.CnsldtnFSItemAttributeValue as fincs_fsitemcashflow preserving type )  as CnsldtnFSItemCashFlow,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.7
      }
      cast( _FSItemAttribValueTxt.CnsldtnFSItemAttribValueText as fincs_short_text_30 preserving type )  as CnsldtnFSItemCashFlowText,

      @Semantics.text
      cast( _FSItemAttribValueTxt.CnsldtnFSItemAttribValLongText as fincs_long_text_60 preserving type ) as CnsldtnFSItemCashFlowLongText,


      _FSItemAttribValueTxt._Language,
      _CnsldtnFSItemCashFlow
};
```
