---
name: I_BUSINESSPARTNERTOBPROLE_2
description: Business PartnerTOBPROLE 2
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
  - business-partner
  - partner
  - component:AP-MD-BP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERTOBPROLE_2

**Business PartnerTOBPROLE 2**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `mandt` |  | |  |  |
| `BusinessPartner` | ✓ | |  | `partner` |
| `BusinessPartnerRole` | ✓ | |  | `rltyp` |
| `BusinessPartnerDiffTypeValue` | ✓ | |  | `dfval` |
| `ValidFrom` |  | |  | `valid_from` |
| `ValidTo` |  | |  | `valid_to` |
| `AuthorizationGroup` |  | | `_BusinessPartner` | `AuthorizationGroup` |
| `_BusinessPartnerRole` | | ✓ | | |
| `_BusinessPartner` | | ✓ | | |
| `_BusinessPartnerDiffValue` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartnerRole` | `I_BusinessPartnerRole` | [0..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_BusinessPartnerDiffValue` | `I_BPDifferentiationTypeValue` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPTOBPROLE2' //must start with "I"

@AccessControl.authorizationCheck:#CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator: '_BusinessPartner.IsBusinessPurposeCompleted'
@AccessControl.privilegedAssociations:  [ '_BusinessPartnerDiffValue' ]

@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                
                {
                    table: 'but100', role: #MAIN,
                    viewElement: ['BusinessPartner' ,'BusinessPartnerRole','BusinessPartnerDiffTypeValue'],
                    tableElement: ['partner', 'rltyp' ,'dfval']
                   
                },
               
                {
                    table: 'but000', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['BusinessPartner'],
                    tableElement: ['partner']
                }                              
            ]
        }
    }
 } 
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Business Partner assignment to BP Role' //same as DDL description

@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #ANALYTICAL_DIMENSION,
                                     #EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION    
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.representativeKey:'BusinessPartnerRole'
@ObjectModel.sapObjectNodeType.name:'BusinessPartnerAssignedRole'

@VDM.viewType: #BASIC
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_BusinessPartnerToBPRole_2 
  as select from but100

  association [0..1] to I_BusinessPartnerRole as _BusinessPartnerRole on $projection.BusinessPartnerRole = _BusinessPartnerRole.BusinessPartnerRole
  association [0..1] to I_BusinessPartner     as _BusinessPartner     on $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_BPDifferentiationTypeValue as _BusinessPartnerDiffValue on $projection.BusinessPartnerDiffTypeValue = _BusinessPartnerDiffValue.BusinessPartnerDiffTypeValue 
{
   @Consumption.hidden: true
   but100.mandt as mandt,
      //--[ GENERATED:012:GlBfhyJl7kY4i6}7dD1KRG
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_BusinessPartnerVH',
                     element: 'BusinessPartner' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_BusinessPartner'
  key but100.partner     as BusinessPartner,
      // @ObjectModel.text.association: '_BusinessPartnerRoleText'
  key but100.rltyp       as BusinessPartnerRole,
     @ObjectModel.foreignKey.association: '_BusinessPartnerDiffValue'
  key but100.dfval       as BusinessPartnerDiffTypeValue,
      but100.valid_from  as ValidFrom,
      but100.valid_to    as ValidTo,


      //        Association
      _BusinessPartnerRole,
      _BusinessPartner.AuthorizationGroup,
      _BusinessPartner,
      _BusinessPartnerDiffValue  
}
where
  but100.dfval = ''
```
