---
name: I_CNSLDTNDOCTYPEBUSINESSAPPLT
description: Cnsldtndoctypebusinessapplt
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNDOCTYPEBUSINESSAPPLT

**Cnsldtndoctypebusinessapplt**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(_DomainT.Language as spras preserving type )` |  |  |
| `CnsldtnDocTypeBusinessAppl` | ✓ | |  | `cast(left(_DomainT.DomainValue, 1) as fincs_doctypebusinessappl preserving type)` |  |  |
| `CnsldtnDocTypeBusinessApplText` |  | | `_DomainT` | `DomainValueText` |  |  |
| `DomainValue` |  | | `_DomainT` | `DomainValue` |  |  |
| `_DocTypeBusinessApplication` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DocTypeBusinessApplication` | `I_CnsldtnDocTypeBusinessAppl` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSDOCTYPBUSAPPT',
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
    representativeKey: 'CnsldtnDocTypeBusinessAppl',
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Cnsldtn Doc Type Business Appl - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnDocTypeBusinessApplT
  as select from P_CnsldtnDomainText(P_DomainName : 'FC_CACTA') as _DomainT

  association [1..1] to I_CnsldtnDocTypeBusinessAppl as _DocTypeBusinessApplication on $projection.CnsldtnDocTypeBusinessAppl = _DocTypeBusinessApplication.CnsldtnDocTypeBusinessAppl

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(_DomainT.Language as spras preserving type )                as Language,

      @ObjectModel.foreignKey.association: '_DocTypeBusinessApplication'
  key cast(left(_DomainT.DomainValue, 1) as fincs_doctypebusinessappl preserving type) as CnsldtnDocTypeBusinessAppl,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.8
      }
      _DomainT.DomainValueText                                         as CnsldtnDocTypeBusinessApplText,

      @Consumption.hidden: true
      @Analytics.hidden: true
      _DomainT.DomainValue,


      _DocTypeBusinessApplication,
      _DomainT._Language
};
```
