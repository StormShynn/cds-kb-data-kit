---
name: I_CNSLDTNDOCTYPEBUSINESSAPPL
description: "Cnsldtndoctypebusinessappl"
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
# I_CNSLDTNDOCTYPEBUSINESSAPPL

**Cnsldtndoctypebusinessappl**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CnsldtnDocTypeBusinessAppl` | ✓ | |  | `cast(left(_Domain.DomainValue, 1) as fincs_doctypebusinessappl )` |  |  |
| `DomainValue` |  | | `_Domain` | `DomainValue` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnDocTypeBusinessApplT` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSDOCTYPBUSAPP',
  compiler.compareFilter: true
  }
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
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
    resultSet.sizeCategory: #XS,
    representativeKey: 'CnsldtnDocTypeBusinessAppl',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'CnsldtnDocTypeBusinessAppl'
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Cnsldtn Doc Type Business Appl'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnDocTypeBusinessAppl
  as select from P_CnsldtnDomain(P_DomainName : 'FC_CACTA') as _Domain

  association [0..*] to I_CnsldtnDocTypeBusinessApplT as _Text on $projection.CnsldtnDocTypeBusinessAppl = _Text.CnsldtnDocTypeBusinessAppl

{
      @ObjectModel.text.association: '_Text'
  key cast(left(_Domain.DomainValue, 1) as fincs_doctypebusinessappl ) as CnsldtnDocTypeBusinessAppl,

      @Consumption.hidden: true
      @Analytics.hidden: true
      @Search: {
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
      _Domain.DomainValue, // required for search


      _Text
};
```
