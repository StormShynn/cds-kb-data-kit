---
name: I_CONTRACTACCOUNTHEADER
description: Contractaccountheader
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - contract
  - header-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CONTRACTACCOUNTHEADER

**Contractaccountheader**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ContractAccount` | `vkont` |
| `CreationDate` | `erdat` |
| `CreationTime` | `ertim` |
| `CreatedByUser` | `ernam` |
| `IsMarkedForDeletion` | `cast(loevm as loevm preserving type)` |
| `LastChangeDate` | `aedat` |
| `LastChangeTime` | `aetim` |
| `LastChangedByUser` | `aenam` |
| `CAApplicationArea` | `applk` |
| `ContractAccountCategory` | `vktyp` |
| `ContractAccountExtReference` | `vkona` |
| `ContractAccountName` | `vkbez` |
| `ContractAccountUUID` | `vkuuid` |
| `_ApplArea` | *Association* |
| `_Category` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ApplArea` | `I_CAApplicationArea` | [1..1] |
| `_Category` | `I_ContractAccountCategory` | [1..1] |
| `_Extension` | `E_ContractAccountHeader` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@Analytics: { dataCategory: #DIMENSION,
              internalName: #LOCAL,
              dataExtraction: { enabled: true,
                                delta.changeDataCapture.automatic: true },
              technicalName: 'ICTRACCHEADER' }

@EndUserText.label: 'Contract Account'

@Metadata: { ignorePropagatedAnnotations: true,
             allowExtensions:true }

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'ContractAccount',
                sapObjectNodeType.name: 'ContractAccount',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #ANALYTICAL_DIMENSION  ],
                usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #XL } }

@VDM.viewType: #BASIC

@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'VKK',
  dataSources: [ '_Extension' ],
  quota: {
    maximumFields: 170,
    maximumBytes: 3400
  }
}


define view entity I_ContractAccountHeader
  as select from fkkvk

  association [1..1] to I_CAApplicationArea       as _ApplArea  on  $projection.CAApplicationArea = _ApplArea.CAApplicationArea
  association [1..1] to I_ContractAccountCategory as _Category  on  $projection.ContractAccountCategory = _Category.ContractAccountCategory
                                                                and $projection.CAApplicationArea       = _Category.CAApplicationArea
  
  association [1..1] to E_ContractAccountHeader   as _Extension on  $projection.ContractAccount = _Extension.ContractAccount

{
      @ObjectModel.text.element: [ 'ContractAccountName' ]
  key vkont                                as ContractAccount,
      @Semantics.systemDate.createdAt: true
      erdat                                as CreationDate,
      @Semantics.systemTime.createdAt: true
      ertim                                as CreationTime,
      //@Semantics.user.createdBy: true
      ernam                                as CreatedByUser,
      cast(loevm as loevm preserving type) as IsMarkedForDeletion,
      @Semantics.systemDate.lastChangedAt: true
      aedat                                as LastChangeDate,
      @Semantics.systemTime.lastChangedAt: true
      aetim                                as LastChangeTime,
      //@Semantics.user.lastChangedBy: true
      aenam                                as LastChangedByUser,
      @ObjectModel.foreignKey.association: '_ApplArea'
      applk                                as CAApplicationArea,
      @ObjectModel.foreignKey.association: '_Category'
      vktyp                                as ContractAccountCategory,
      vkona                                as ContractAccountExtReference,
      @Semantics.text: true
      vkbez                                as ContractAccountName,
      @Semantics.uuid: true
      vkuuid                               as ContractAccountUUID,

      _ApplArea,
      _Category
}
```
