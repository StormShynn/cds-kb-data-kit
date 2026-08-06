---
name: I_JNTOPGAGRMTCLASS
description: Jntopgagrmtclass
app_component: CA-JVA
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-JVA
  - interface-view
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JNTOPGAGRMTCLASS

**Jntopgagrmtclass**

| Property | Value |
|---|---|
| App Component | `CA-JVA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CompanyCode` | `bukrs` |
| key `JntOpgAgrmtClass` | `aclass` |
| `JntOpgAgrmtNmbrRange` | `anrange` |
| `_CompanyCode` | *Association* |
| `_JntOpgAgrmtClassText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_JntOpgAgrmtClassText` | `I_JntOpgAgrmtClassText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJOACL'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Joint Operating Agreement Class'
@Analytics: { dataCategory: #DIMENSION }
@Analytics.internalName:#LOCAL
@Metadata.allowExtensions:true
@VDM.viewType: #BASIC
@ObjectModel:{
  representativeKey: 'JntOpgAgrmtClass',
  usageType.dataClass: #MASTER,
  usageType.sizeCategory: #S,
  usageType.serviceQuality: #B
             }
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #UI_PROVIDER_PROJECTION_SOURCE ]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.sapObjectNodeType.name: 'JointOperatingAgreementClass'
@Analytics.dataExtraction.enabled: true
define view I_JntOpgAgrmtClass
  as select from t8j9f
  association [1..1] to I_CompanyCode          as _CompanyCode          on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..*] to I_JntOpgAgrmtClassText as _JntOpgAgrmtClassText on  $projection.CompanyCode      = _JntOpgAgrmtClassText.CompanyCode
                                                                        and $projection.JntOpgAgrmtClass = _JntOpgAgrmtClassText.JntOpgAgrmtClass
{
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_JointVentureCompanyCodeVH',
                           element: 'CompanyCode' }
              }]
      @ObjectModel.foreignKey.association: '_CompanyCode'      
  key bukrs   as CompanyCode,
      @ObjectModel.text.association: '_JntOpgAgrmtClassText'
      @EndUserText: { label: 'JOA Class' , quickInfo: 'Joint Operating Agreement Class' }
  key aclass  as JntOpgAgrmtClass,
      @EndUserText: { label: 'Number Range' , quickInfo: 'Number Range' }
      anrange as JntOpgAgrmtNmbrRange,

      _CompanyCode,
      _JntOpgAgrmtClassText
}
```
