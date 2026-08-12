---
name: I_CLFNCHARCEXPONENTFORMAT
description: "Clfncharcexponentformat"
app_component: CA-CL-2CL
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-CL
  - interface-view
  - component:CA-CL-2CL
  - lob:Cross-Application Components
---
# I_CLFNCHARCEXPONENTFORMAT

**Clfncharcexponentformat**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CharcExponentFormat` | ✓ | |  | `cast( dd07l.domvalue_l as atdex )` | `NUMC(1)` | Exponent Display Format |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'INGCCHR23'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Exponent Format of Clfn Characteristic'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'CharcExponentFormat'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.sapObjectNodeType.name: 'ClfnCharcExponentFormat' 
@ObjectModel.supportedCapabilities:
  [  #ANALYTICAL_DIMENSION,
     #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #SQL_DATA_SOURCE,
     #EXTRACTION_DATA_SOURCE,
     #VALUE_HELP_PROVIDER,
     #SEARCHABLE_ENTITY                ]
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define root view I_ClfnCharcExponentFormat
  as select from dd07l 
  composition [0..*] of I_ClfnCharcExponentFormatText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as atdex ) as CharcExponentFormat,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l as DomainValue,
      
      _Text
} 
where dd07l.domname  = 'ATDEX'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
