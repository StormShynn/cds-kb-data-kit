---
name: I_CUSTOMERACCOUNTGROUPTEXT
description: Customeraccountgrouptext
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - text-view
  - customer
  - text
  - component:LO-MD-BP-2CL
  - lob:Logistics General
  - bo:Customer
---
# I_CUSTOMERACCOUNTGROUPTEXT

**Customeraccountgrouptext**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |
| `CustomerAccountGroup` | ✓ | |  | `ktokd` |
| `AccountGroupName` |  | |  | `txt30` |
| `_CustomerAccountGroup` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustomerAccountGroup` | `I_CustomerAccountGroup` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICUSTACCTGRPTXT'

@AccessControl.authorizationCheck:#CHECK
 
@Analytics: {
    //dataCategory: #TEXT,
    dataExtraction: {
       enabled: true,
       delta.changeDataCapture: {
          automatic : true
       }
    }
}

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Customer Account Group - Text'//'Customer Account Group'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT                                     
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CustomerAccountGroup'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@VDM.viewType: #BASIC

define view I_CustomerAccountGroupText
  as select from t077x
  
  association [1..1] to I_CustomerAccountGroup   as  _CustomerAccountGroup  on  _CustomerAccountGroup.CustomerAccountGroup =  $projection.CustomerAccountGroup 
  association [0..1] to I_Language      as     _Language         on     $projection.Language = _Language.Language
{
      @Semantics.language
  key t077x.spras as Language,
  key t077x.ktokd as CustomerAccountGroup,
      @Semantics.text
      t077x.txt30 as AccountGroupName,
      
      //associations 
      _CustomerAccountGroup,
      _Language
      
}
```
