---
name: I_BUPAIDENTIFICATION
description: Bupaidentification
app_component: AP-MD-BP
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - component:AP-MD-BP
  - lob:Other
---
# I_BUPAIDENTIFICATION

**Bupaidentification**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  | `partner` |  |  |
| `BPIdentificationType` | ✓ | |  | `type` |  |  |
| `BPIdentificationNumber` | ✓ | |  | `idnumber` |  |  |
| `BPIdnNmbrIssuingInstitute` |  | |  | `institute` |  |  |
| `BPIdentificationEntryDate` |  | |  | `entry_date` |  |  |
| `Country` |  | |  | `country` |  |  |
| `Region` |  | |  | `region` |  |  |
| `ValidityStartDate` |  | |  | `valid_date_from` |  |  |
| `ValidityEndDate` |  | |  | `valid_date_to` |  |  |
| `AuthorizationGroup` |  | | `_BusinessPartner` | `AuthorizationGroup` |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_BuPaIdentificationType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_BuPaIdentificationType` | `I_BuPaIdentificationType` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Business Partner Identification' //same as DDL description
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#CHECK
@AccessControl.personalData.blocking: #REQUIRED
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE,
                                     #ANALYTICAL_DIMENSION]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION 
@ObjectModel.representativeKey: 'BPIdentificationNumber'
@ObjectModel.sapObjectNodeType.name: 'BusinessPartnerIdentification'
@Analytics.technicalName: 'IBUPAID'
@Metadata.ignorePropagatedAnnotations: true
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping:[
                {
                    table: 'BUT0ID', role: #MAIN,
                    viewElement: ['BusinessPartner','BPIdentificationType' , 'BPIdentificationNumber'],
                    tableElement: ['partner','type','idnumber']
                },
                {
                    table: 'BUT000', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['BusinessPartner'],
                    tableElement: ['partner']
                }
                
           ]
    }
  }
}
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'IDT',
  allowNewDatasources: false,
  dataSources: ['_BusinessPartner'],
  quota: {
    maximumFields: 250,
    maximumBytes: 2500
  }
}
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view entity I_BuPaIdentification
  as select from but0id 
  association [1..1] to I_BusinessPartner     as _BusinessPartner     on $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  
  association [0..1] to I_BuPaIdentificationType     as _BuPaIdentificationType on $projection.BPIdentificationType = _BuPaIdentificationType.BPIdentificationType
{
  @ObjectModel.foreignKey.association: '_BusinessPartner'
  key partner     as BusinessPartner,
  @ObjectModel.foreignKey.association: '_BuPaIdentificationType'
  key type        as BPIdentificationType,
  key idnumber    as BPIdentificationNumber,
      institute   as BPIdnNmbrIssuingInstitute,
      entry_date  as BPIdentificationEntryDate,
      country     as Country,
      region      as Region,
    //  but0ID.idnumber_guid as IdentificationUUID,
      valid_date_from as ValidityStartDate,
      valid_date_to as ValidityEndDate,
      _BusinessPartner.AuthorizationGroup as AuthorizationGroup,
      _BusinessPartner,
      _BuPaIdentificationType
}
```
