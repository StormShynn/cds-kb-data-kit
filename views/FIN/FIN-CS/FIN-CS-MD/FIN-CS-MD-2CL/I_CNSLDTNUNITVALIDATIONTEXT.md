---
name: I_CNSLDTNUNITVALIDATIONTEXT
description: Cnsldtnunitvalidationtext
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNUNITVALIDATIONTEXT

**Cnsldtnunitvalidationtext**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | | `_UnitAttributeValueT` | `Language` |
| `ConsolidationUnitValidation` | ✓ | |  | `cast( _UnitAttributeValueT.CnsldtnUnitAttributeValue as fincs_unitvalidation preserving type )` |
| `CnsldtnUnitValidationText` |  | | `_UnitAttributeValueT` | `CnsldtnUnitAttribValText` |
| `CnsldtnUnitValidationLongText` |  | | `_UnitAttributeValueT` | `CnsldtnUnitAttribValLongText` |
| `_CnsldtnUnitValidation` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnUnitValidation` | `I_CnsldtnUnitValidation` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSCUVALIDATT',
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
    representativeKey: 'ConsolidationUnitValidation',
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
@EndUserText.label: 'Cons Unit Validation Selection - Text'

define view I_CnsldtnUnitValidationText
  as select from P_CnsldtnUnitAttributeValueT(P_CnsldtnUnitAttribute : 'S-VALIDATION') as _UnitAttributeValueT

  association [1..1] to I_CnsldtnUnitValidation as _CnsldtnUnitValidation on $projection.ConsolidationUnitValidation = _CnsldtnUnitValidation.ConsolidationUnitValidation
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key _UnitAttributeValueT.Language,

  key cast( _UnitAttributeValueT.CnsldtnUnitAttributeValue as fincs_unitvalidation preserving type ) as ConsolidationUnitValidation,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.7
      }
      _UnitAttributeValueT.CnsldtnUnitAttribValText                                                      as CnsldtnUnitValidationText,

      @Semantics.text
      _UnitAttributeValueT.CnsldtnUnitAttribValLongText                                                  as CnsldtnUnitValidationLongText,


      _UnitAttributeValueT._Language,
      _CnsldtnUnitValidation
}
```
