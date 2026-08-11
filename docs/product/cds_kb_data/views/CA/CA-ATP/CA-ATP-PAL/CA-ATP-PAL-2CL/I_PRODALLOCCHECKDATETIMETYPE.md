---
name: I_PRODALLOCCHECKDATETIMETYPE
description: "Prodalloccheckdatetimetype"
app_component: CA-ATP-PAL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-ATP
  - CA-ATP-PAL
  - interface-view
  - component:CA-ATP-PAL-2CL
  - lob:Cross-Application Components
---
# I_PRODALLOCCHECKDATETIMETYPE

**Prodalloccheckdatetimetype**

| Property | Value |
|---|---|
| App Component | `CA-ATP-PAL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProdAllocCheckDateTimeType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as prodalloccheckdatetimetype preserving type )` | `CHAR(2)` | Product Allocation Check Date Time Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProdAllocCheckDateTimeTypeT` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Product Allocation Check Date Time Type' //same as DDL description
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK 
@ObjectModel.representativeKey: 'ProdAllocCheckDateTimeType'
@AbapCatalog.sqlViewName: 'IPALCHKDTT'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.sapObjectNodeType.name: 'ProdAllocCheckDateTimeType' 
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #VALUE_HELP_PROVIDER,
                                        #SEARCHABLE_ENTITY                   ]
@Metadata.ignorePropagatedAnnotations: true
define view I_ProdAllocCheckDateTimeType 
   as select from dd07l
   association [0..*] to I_ProdAllocCheckDateTimeTypeT as _Text 
      on $projection.ProdAllocCheckDateTimeType = _Text.ProdAllocCheckDateTimeType 
{
   @ObjectModel.text.association: '_Text'
    key cast ( substring( domvalue_l, 1, 2 ) as prodalloccheckdatetimetype preserving type ) as ProdAllocCheckDateTimeType
   , _Text
}
where domname  = 'PRODALLOCCHECKDATETIMETYPE' 
  and as4local = 'A'
```
