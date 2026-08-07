---
name: I_CNSLDTNFSITEMSCOPETEXT
description: Cnsldtnfsitemscopetext
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
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
# I_CNSLDTNFSITEMSCOPETEXT

**Cnsldtnfsitemscopetext**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_FSItemAttribValueTxt` | `Language` |  |  |
| `CnsldtnFSItemScope` | ✓ | |  | `cast( _FSItemAttribValueTxt.CnsldtnFSItemAttributeValue as fincs_fsitemscope preserving type )` |  |  |
| `CnsldtnFSItemScopeText` |  | | `_FSItemAttribValueTxt` | `CnsldtnFSItemAttribValueText` |  |  |
| `CnsldtnFSItemScopeLongText` |  | | `_FSItemAttribValueTxt` | `CnsldtnFSItemAttribValLongText` |  |  |
| `_CnsldtnFSItemScope` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnFSItemScope` | `I_CnsldtnFSItemScope` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSFSISCOPET',
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
    representativeKey: 'CnsldtnFSItemScope',
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
@EndUserText.label: 'FS Item Scope Selection - Text'

define view I_CnsldtnFSItemScopeText
  as select from P_CnsldtnFSItemAttribValueTxt(P_CnsldtnFSItemAttribute : '006') as _FSItemAttribValueTxt

  association [1..1] to I_CnsldtnFSItemScope as _CnsldtnFSItemScope on $projection.CnsldtnFSItemScope = _CnsldtnFSItemScope.CnsldtnFSItemScope
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key _FSItemAttribValueTxt.Language,

  key cast( _FSItemAttribValueTxt.CnsldtnFSItemAttributeValue as fincs_fsitemscope preserving type ) as CnsldtnFSItemScope,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.7
      }
      _FSItemAttribValueTxt.CnsldtnFSItemAttribValueText                                             as CnsldtnFSItemScopeText,

      @Semantics.text
      _FSItemAttribValueTxt.CnsldtnFSItemAttribValLongText                                           as CnsldtnFSItemScopeLongText,


      _FSItemAttribValueTxt._Language,
      _CnsldtnFSItemScope
}
```
