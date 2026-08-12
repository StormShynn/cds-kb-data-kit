---
name: I_PRODPROCUREMENTTYPE
description: "Prodprocurementtype"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODPROCUREMENTTYPE

**Prodprocurementtype**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProcurementType` | ✓ | |  | `cast ( domvalue_l as beskz )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProdProcurementTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRDPROCTYPE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Product Procurement Type'
@ObjectModel: {
  usageType : {
    serviceQuality: #A,
    sizeCategory : #S,
    dataClass: #META
    },
  resultSet.sizeCategory: #XS,
  representativeKey: 'ProcurementType',
  dataCategory: #VALUE_HELP
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@Search.searchable: true
@Analytics:{
  dataCategory: #DIMENSION,
  internalName: #LOCAL
}
@ObjectModel.sapObjectNodeType.name:'ProcurementType'
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                      #ANALYTICAL_DIMENSION,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #SEARCHABLE_ENTITY ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
define view I_ProdProcurementType
  as select from dd07l
  association [0..*] to I_ProdProcurementTypeText as _Text on $projection.ProcurementType = _Text.ProcurementType
{
       @ObjectModel.text.association: '_Text'
  key  cast ( domvalue_l as beskz ) as ProcurementType,
       @Search: {
         defaultSearchElement: true,
         fuzzinessThreshold: 0.8,
         ranking: #HIGH
       }
       @Consumption.hidden: true
       domvalue_l                   as DomainValue,
       _Text
}
where
      dd07l.domname  = 'BESKZ'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
