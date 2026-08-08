---
name: I_TECHNICALOBJECTTYPE
description: "Technicalobjecttype"
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-EQ
  - interface-view
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# I_TECHNICALOBJECTTYPE

**Technicalobjecttype**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TechnicalObjectType` | ✓ | |  | `eqart` |  |  |
| `EAMTechnicalObjectTypeOID` |  | |  | `cast( t370k.eqart as technicalobjecttype_oid )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TechnicalObjectTypeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Techncial Object Type'
@Analytics: { dataCategory: #DIMENSION,
  dataExtraction : { enabled: true ,
  delta.changeDataCapture.automatic: true }
}
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'ITECHOBJTYPE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck:#CHECK
@ObjectModel.representativeKey: 'TechnicalObjectType'

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.alternativeKey:[{id:'OID',element:['EAMTechnicalObjectTypeOID']}]
@ObjectModel.sapObjectNodeType.name:'EAMTechnicalObjectType' 
@ObjectModel.objectIdentifier.oidElement:'EAMTechnicalObjectTypeOID'

define view I_TechnicalObjectType
  as select from           t370k // T370K = Type of technical object
  association [0..*] to I_TechnicalObjectTypeText as _Text on _Text.TechnicalObjectType = $projection.TechnicalObjectType
{
      @ObjectModel.text.association: '_Text'
  key t370k.eqart as TechnicalObjectType,

      //MDI/ODM
      @ObjectModel.filter.enabled:false
      @ObjectModel.sort.enabled:false
      
      cast( t370k.eqart as technicalobjecttype_oid ) as EAMTechnicalObjectTypeOID, //use your own OID field name

      // Propagate association
      _Text
}
```
