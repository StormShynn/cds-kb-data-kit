---
name: I_CUSTOMERACCOUNTGROUP
description: Customeraccountgroup
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
  - customer
  - component:LO-MD-BP-2CL
  - lob:Logistics General
  - bo:Customer
---
# I_CUSTOMERACCOUNTGROUP

**Customeraccountgroup**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CustomerAccountGroup` | ✓ | |  | `ktokd` |
| `_CustomerAccountGroupText` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustomerAccountGroupText` | `I_CustomerAccountGroupText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Customer Account Group' //same as DDL description
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'CustomerAccountGroup'
@AbapCatalog.sqlViewName: 'ICUSTACCGRP'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #ANALYTICAL_DIMENSION,
                                     #EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern:#ANALYTICAL_DIMENSION                                     
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name: 'CustomerAccountGroup'
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
define view I_CustomerAccountGroup //must start with "I_"; same as DDL source name in upper-camelcase notation
  as select from t077d

  association [0..*] to I_CustomerAccountGroupText as _CustomerAccountGroupText on $projection.CustomerAccountGroup = _CustomerAccountGroupText.CustomerAccountGroup
{
      @ObjectModel.text.association: '_CustomerAccountGroupText'
  key t077d.ktokd as CustomerAccountGroup,
      _CustomerAccountGroupText
}
```
